import React, { Component } from 'react';
import styled from 'styled-components';
import getColor from '../config/colors';
import { getTypography, baseStep } from '../config/style-constants';

const StyledHeader = styled.div`
  font-family: Titillium Web;
  padding: ${baseStep(-2)};
  ${getTypography(-1)};
  border-bottom: 1px solid ${getColor('secondary')};
  color: ${getColor('secondary')};
`;

export default class TraitManagerHeader extends Component {
  render() {
    return <StyledHeader>TRAITS</StyledHeader>;
  }
}
