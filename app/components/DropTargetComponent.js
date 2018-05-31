// @flow
import * as React from 'react';
import styled from 'styled-components';
import { DropTarget } from 'react-dnd';
import getColor from '../config/colors';
import {
  getTypography,
  baseStep,
  horizontalViewName
} from '../config/style-constants';

const StyledDiv = styled.div`
  color: ${getColor('whitey')};
  text-align: center;
  padding: ${baseStep(-4)};
  padding-top: 0;
  padding-top: ${props =>
    props.isHorizontal && props.hasChildren ? baseStep(2) : 0};
  margin: ${baseStep(-4)};
  position: relative;
  display: flex;
  flex-direction: ${props => (props.isHorizontal ? 'row' : 'column')};
  align-items: center;
  justify-content: center;
  border: 1px solid ${getColor('white')};
  transition: 0.2s background-color;
  border-radius: 5px;
  background-color: ${props =>
    getColor(props.isActive ? 'primary' : 'secondary')};
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
  children: Array<React.Node>
};

class DropTargetComponent extends React.Component<Props> {
  render() {
    const {
      canDrop,
      isOver,
      connectDropTarget,
      children = [],
      viewName,
      type
    } = this.props;
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
      hasChildren
    };
    return connectDropTarget(
      <div>
        <StyledDiv {...divProps}>
          <StyledName {...divProps}>{viewName}</StyledName>
          {children}
        </StyledDiv>
      </div>
    );
  }
}

export default DropTarget('component', boxTarget, collect)(DropTargetComponent);
