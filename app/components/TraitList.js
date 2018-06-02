import React, { Component } from 'react';
import styled from 'styled-components';
import getColor from '../config/colors';
import TraitColor from './TraitColor';
import TraitPadding from './TraitPadding';
import { getTypography, baseStep } from '../config/style-constants';
import type { componentType } from '../types/component';

type Props = {
  selectedComponent: componentType | {}
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin-top: ${baseStep(-2)};
`;

const StyledDiv = styled.div`
  font-family: Titillium Web;
  padding: ${baseStep(-2)};
  margin: ${baseStep(-2)} 0 0;
  ${getTypography(-1)};
  background-color: ${getColor('white')};
  border-radius: 5px;
  color: ${getColor('secondary')};
`;

const EmptyDiv = styled.div`
  font-family: Titillium Web;
  align-self: center;
  top: 50%;
  position: absolute;
  color: ${getColor('ashes')};
`;

const traitWrapper = { color: TraitColor, padding: TraitPadding };

export default class TraitList extends Component<Props> {
  render() {
    const { selectedComponent } = this.props;
    if (!selectedComponent.componentData)
      return (
        <StyledContainer>
          <EmptyDiv>No component selected</EmptyDiv>
        </StyledContainer>
      );
    const traits =
      selectedComponent.componentData &&
      selectedComponent.componentData.map(element => {
        const TraitComponent = traitWrapper[element.name] || <div>und</div>;
        return (
          <StyledDiv key={element.name}>
            <TraitComponent />
          </StyledDiv>
        );
      });
    return <StyledContainer>{traits}</StyledContainer>;
  }
}
