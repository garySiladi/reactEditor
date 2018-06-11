import React, { Component } from 'react';
import styled from 'styled-components';
import { baseStep } from '../config/style-constants';
import TraitManagerHeader from './TraitManagerHeader';
import TraitListContainer from '../containers/TraitListContainer';

const StyledWrapper = styled.div`
  padding: 0 ${baseStep(-2)} ${baseStep(-2)};
  flex-grow: 1;
`;

export default class TraitManager extends Component {
  render() {
    return (
      <StyledWrapper>
        <TraitManagerHeader />
        <TraitListContainer />
      </StyledWrapper>
    );
  }
}
