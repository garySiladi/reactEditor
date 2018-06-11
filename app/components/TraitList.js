import React, { Component } from 'react';
import styled from 'styled-components';
import getColor from '../config/colors';
import { traitViewnames } from './traits';
import TraitComponent from '../containers/traits/TraitContainer';
import { getTypography, baseStep } from '../config/style-constants';
import type { componentType } from '../types/component';

type Props = {
  selectedComponent: componentType | {},
  removeComponent: string => {}
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${baseStep(-2)};
  position: relative;
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
  border-radius: 5px;
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

const DeletionDiv = styled.div`
  font-family: Titillium Web;
  ${getTypography(-1)};
  text-align: center;
  cursor: pointer;
  margin: ${baseStep(0)};
  padding: ${baseStep(-3)};
  background: ${getColor('orange')};
  color: ${getColor('white')};
  transition: 0.2s;

  &:hover {
    background: ${getColor('darkOrange')};
  }
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
        if (traitViewnames[element.name]) {
          return (
            <StyledDiv key={element.name}>
              <TraitHeader>{traitViewnames[element.name]}</TraitHeader>
              <TraitComponent traitName={element.name} />
            </StyledDiv>
          );
        }
        return null;
      });
    return (
      <StyledContainer key={selectedComponent.id}>
        {traits}
        <DeletionDiv
          onClick={() => {
            this.props.removeComponent(selectedComponent.id);
          }}
        >
          DELETE COMPONENT
        </DeletionDiv>
      </StyledContainer>
    );
  }
}
