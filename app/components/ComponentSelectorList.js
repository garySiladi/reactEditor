// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import DropComponentWrapper from '../containers/DropComponentWrapper';
import { baseStep } from '../config/style-constants';
import getColor from '../config/colors';
import type { componentType } from '../types/component';

type Props = {
  bottomSelectedList: Array<componentType>,
  selectComponent: (child: componentType) => {}
};

const StyledComponentSelectorList = styled.div`
  display: flex;
  flex: 0 0 150px;
  align-items: center;
  margin-left: ${baseStep(0)};
  margin-right: ${baseStep(0)};
  padding: 0 ${baseStep(0)};
  overflow-x: auto;
  flex-wrap: nowrap;
`;

const getBoxStyling = dimension => `
  width: ${dimension}px;
  height: ${dimension}px;
`;

const StyledListComponent = styled.div`
  ${getBoxStyling(80)};
  flex-direction: column;
  display: flex;
  border-radius: 10px;
  justify-content: space-around;
  cursor: pointer;
`;

const StyledListComponentWrapper = styled.div`
  ${getBoxStyling(80)};
  padding: ${baseStep(0)};
  background: ${getColor('secondary')};
  margin-right: ${baseStep(0)};
  transition: transform 0.2s;
  text-align: center;
  color: ${getColor('whitey')};
  border-radius: 10px;
  flex: 0 0 auto;

  & :hover {
    transform: scale(1.1, 1.1);
  }
`;

class ComponentSelectorList extends Component<Props> {
  props: Props;
  render() {
    return (
      <StyledComponentSelectorList>
        {this.props.bottomSelectedList.map(child => (
          <StyledListComponentWrapper key={child.componentName}>
            <DropComponentWrapper {...child}>
              <StyledListComponent
                onClick={() => {
                  this.props.selectComponent(child);
                }}
              >
                <FontAwesome name={child.componentIcon || 'square'} size="2x" />
                {child.componentName}
              </StyledListComponent>
            </DropComponentWrapper>
          </StyledListComponentWrapper>
        ))}
      </StyledComponentSelectorList>
    );
  }
}

export default ComponentSelectorList;
