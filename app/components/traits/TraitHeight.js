import * as React from 'react';
import styled from 'styled-components';
import { baseStep } from '../../config/style-constants';
import getColor from '../../config/colors';
import { traitProps } from '.';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  & input {
    max-width: 30px;

    &::selection {
      background: ${getColor('primary')};
    }
  }
`;

class TraitHeight extends React.Component<traitProps> {
  handleChange = event => {
    this.props.changeComponentTrait('height', event.target.value);
  };
  render() {
    return (
      <StyledDiv>
        <input
          type="number"
          defaultValue={this.props.traitValue}
          onChange={this.handleChange}
          step="0.1"
          min="0"
        />
        <div style={{ marginLeft: baseStep(-2) }}>em</div>
      </StyledDiv>
    );
  }
}

export default TraitHeight;
