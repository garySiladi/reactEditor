import React, { Component } from 'react';
import styled from 'styled-components';
import getColor from '../config/colors';
// import getTraitComponent from './traits';
import TraitComponent from '../containers/traits/TraitContainer';
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
  color: ${getColor('secondary')};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TraitHeader = styled.div`
  padding-right: ${baseStep(0)};
  min-width: 50px;
  margin-right: ${baseStep(0)};
  border-right: 1px solid ${getColor('ashes')};
`;

const EmptyDiv = styled.div`
  font-family: Titillium Web;
  align-self: center;
  top: 50%;
  position: absolute;
  color: ${getColor('ashes')};
`;

export default class TraitList extends Component<Props> {
  render() {
    const { selectedComponent } = this.props;
    if (!selectedComponent.componentData || selectedComponent.id === '0')
      return (
        <StyledContainer>
          <EmptyDiv>No component selected</EmptyDiv>
        </StyledContainer>
      );
    const traits =
      selectedComponent.componentData &&
      selectedComponent.componentData.map(element => {
        // const TraitComponent = getTraitComponent(element.name);
        return (
          <StyledDiv key={element.name}>
            <TraitHeader>{element.name.toUpperCase()}</TraitHeader>
            <TraitComponent traitName={element.name} />
          </StyledDiv>
        );
      });
    return (
      <StyledContainer>
        {traits}
        <div
          onClick={() => {
            this.props.removeComponent(selectedComponent.id);
          }}
          style={{
            margin: '1em',
            padding: '0.5em',
            background: '#d66262',
            color: 'white'
          }}
        >
          DELETE COMPONENT
        </div>
      </StyledContainer>
    );
  }
}
