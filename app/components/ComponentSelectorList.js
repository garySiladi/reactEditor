// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { baseStep } from '../config/style-constants';
import getColor from '../config/colors';
import type { componentType } from '../types/component';

type Props = {
  bottomSelectedList: Array<componentType>
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
  background: ${getColor('secondary')};
  margin-right: ${baseStep(0)};
  padding: ${baseStep(0)};
  text-align: center;
  color: ${getColor('whitey')};
  ${getBoxStyling(80)};
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  flex: 0 0 auto;
  transition: transform 0.2s;

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
          <StyledListComponent key={child.componentName}>
            <FontAwesome name={child.componentIcon || 'square'} size="2x" />
            {child.componentName}
          </StyledListComponent>
        ))}
      </StyledComponentSelectorList>
    );
  }
}

export default ComponentSelectorList;
