import * as React from 'react';
import styled from 'styled-components';
import getColor from '../../config/colors';
import { traitProps } from '.';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  & input {
    max-width: 200px;

    &::selection {
      background: ${getColor('primary')};
    }
  }
`;

class TraitBackgroundURL extends React.Component<traitProps> {
  handleChange = event => {
    this.props.changeComponentTrait('backgroundURL', event.target.value);
  };
  render() {
    return (
      <StyledDiv>
        <input
          type="text"
          defaultValue={this.props.traitValue}
          onChange={this.handleChange}
        />
      </StyledDiv>
    );
  }
}

export default TraitBackgroundURL;
