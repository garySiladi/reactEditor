// @flow
/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/mouse-events-have-key-events, jsx-a11y/no-static-element-interactions */
import * as React from 'react';
import styled from 'styled-components';
import { DropTarget } from 'react-dnd';
import getColor from '../config/colors';
import {
  getTypography,
  baseStep,
  horizontalViewName,
  emptyRootDimensions
} from '../config/style-constants';
import type { hierarchyComponentType } from '../reducers/projectStructure';

const StyledDiv = styled.div`
  color: ${getColor('whitey')};
  text-align: center;
  padding: ${baseStep(-4)};
  padding-top: ${props =>
    props.isHorizontal && props.hasChildren ? baseStep(2) : 0};
  ${props => !props.isContainer && `padding-top: ${baseStep(-4)}`};
  margin: ${baseStep(-4)};
  position: relative;
  display: flex;
  flex-direction: ${props => (props.isHorizontal ? 'row' : 'column')};
  align-items: stretch;
  justify-content: ${props => (props.hasChildren ? 'center' : 'start')};
  ${props => props.isRoot && !props.hasChildren && emptyRootDimensions}
  border: 1px solid ${getColor('white')};
  transition: 0.2s background-color;
  border-radius: 5px;
  background-color: ${props =>
    getColor(props.isActive ? 'primary' : 'secondary')};
  ${props =>
    props.isMouseOver && `background-color: ${getColor('slightGrey')}`};
  cursor: pointer;
`;

const StyledName = styled.div`
  display: block;
  ${props =>
    props.isHorizontal &&
    props.hasChildren &&
    horizontalViewName} ${getTypography(-1)};
  color: ${getColor('secondary')};
  margin-top: 0;
  font-weight: 700;
  padding: ${baseStep(-7)} ${baseStep(-4)};
  border-radius: 0 0 5px 5px;
  ${props => !props.isContainer && `border-radius: 5px`};
  background-color: ${props =>
    getColor(props.isContainer ? 'orange' : 'primary')};
`;

const boxTarget = {
  drop(props, monitor) {
    if (monitor.didDrop()) return undefined;
    return {
      viewName: props.viewName,
      type: props.type,
      id: props.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop()
  };
}

type Props = {
  canDrop: boolean,
  isOver: boolean,
  connectDropTarget: any,
  viewName: string,
  type: string,
  children: Array<React.Node>,
  componentData: Array<any>,
  selectComponent: (data: hierarchyComponentType) => {},
  id: string,
  componentID: ?number,
  parentID: ?string
};

type State = {
  isMouseOver: boolean
};

class DropTargetComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { isMouseOver: false };
  }

  handleMouseOver = (event: any, data: boolean) => {
    event.stopPropagation();
    if (!this.props.isOver) {
      this.setState({ isMouseOver: data });
    }
  };

  handleComponentClick = (event: any) => {
    event.stopPropagation();
    const {
      selectComponent,
      id,
      componentID,
      viewName,
      componentData = [],
      type,
      parentID
    } = this.props;
    selectComponent({
      id,
      componentID,
      componentData,
      viewName,
      type,
      parentID
    });
  };

  render() {
    const {
      canDrop,
      isOver,
      connectDropTarget,
      children = [],
      viewName,
      type
    } = this.props;
    const { isMouseOver } = this.state;
    const isContainer = type === 'container';
    const isRoot = viewName === ' ';
    const isHorizontal = isContainer && viewName === 'Horizontal';
    const isActive = canDrop && isOver && isContainer;
    const hasChildren = children.length !== 0;
    const divProps = {
      isRoot,
      isActive,
      isContainer,
      isHorizontal,
      hasChildren,
      isOver,
      isMouseOver
    };
    return connectDropTarget(
      <div>
        <StyledDiv
          {...divProps}
          onClick={this.handleComponentClick}
          onMouseOver={event => {
            this.handleMouseOver(event, true);
          }}
          onMouseOut={event => {
            this.handleMouseOver(event, false);
          }}
        >
          <StyledName {...divProps}>{viewName}</StyledName>
          {children}
        </StyledDiv>
      </div>
    );
  }
}

export default DropTarget('component', boxTarget, collect)(DropTargetComponent);
