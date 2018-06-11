import * as React from 'react';
import styled from 'styled-components';
import getColor from '../../config/colors';
import { traitProps } from '.';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  & input {
    border: none;
    background: transparent;
    max-width: 150px;
    max-height: 20px;

    &::selection {
      background: ${getColor('primary')};
    }
  }
`;

class TraitColor extends React.Component<traitProps> {
  handleChange = event => {
    this.props.changeComponentTrait('color', event.target.value);
  };
  render() {
    return (
      <StyledDiv>
        <input
          type="color"
          value={this.props.traitValue}
          onChange={this.handleChange}
        />
      </StyledDiv>
    );
  }
}

export default TraitColor;
