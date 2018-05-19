// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import ComponentSelectorHeaderContainer from '../containers/ComponentSelectorHeaderContainer';
import ComponentSelectorListContainer from '../containers/ComponentSelectorListContainer';
import { getTypography } from '../config/style-constants';

type Props = {};

const StyledComponentSelector = styled.div`
  display: flex;
  flex-direction: column;
  ${getTypography(-1)};
  height: 100%;
`;

class ComponentSelector extends Component<Props> {
  props: Props;
  render() {
    return (
      <StyledComponentSelector>
        <ComponentSelectorHeaderContainer />
        <ComponentSelectorListContainer />
      </StyledComponentSelector>
    );
  }
}

export default ComponentSelector;
