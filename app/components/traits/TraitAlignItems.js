import * as React from 'react';
import styled from 'styled-components';
// import { baseStep } from '../../config/style-constants';
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

class TraitAlignItems extends React.Component<traitProps> {
  handleChange = event => {
    this.props.changeComponentTrait('alignItems', event.target.value);
  };
  render() {
    return (
      <StyledDiv>
        <select value={this.props.traitValue} onChange={this.handleChange}>
          <option value="stretch">stretch</option>
          <option value="center">center</option>
          <option value="flex-start">flex-start</option>
          <option value="flex-end">flex-end</option>
        </select>
      </StyledDiv>
    );
  }
}

export default TraitAlignItems;
