import React, { Component } from 'react';
import styled from 'styled-components';
import { ChromePicker } from 'react-color';
import getColor from '../config/colors';
import { getTypography, baseStep } from '../config/style-constants';
import type { componentType } from '../types/component';

type Props = {
  selectedComponent: componentType | {}
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  font-family: Titillium Web;
  padding: ${baseStep(-2)};
  margin: ${baseStep(-2)} 0 0;
  ${getTypography(-1)};
  background-color: ${getColor('white')};
  border: 1px solid ${getColor('greyhound')};
  color: ${getColor('secondary')};
`;

export default class TraitList extends Component<Props> {
  render() {
    const { selectedComponent } = this.props;
    const traits =
      selectedComponent.traits &&
      this.props.selectedComponent.traits.map(element => {
        console.log(element.color);
        return (
          <StyledDiv key={element.color}>
            {element.color}
            <ChromePicker />
          </StyledDiv>
        );
      });
    return <StyledContainer>{traits}</StyledContainer>;
  }
}
