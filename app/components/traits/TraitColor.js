import * as React from 'react';
import styled from 'styled-components';
// import { baseStep } from '../config/style-constants';
import getColor from '../../config/colors';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;

  & input {
    border: none;
    background: transparent;
    max-width: 150px;

    &::selection {
      background: ${getColor('primary')};
    }
  }
`;

type Props = {};

type State = {};

class TraitColor extends React.Component {
  handleChange = event => {
    this.props.changeComponentTrait('color', event.target.value);
  };
  render() {
    const { traitValue, changeComponentTrait } = this.props;
    return (
      <StyledDiv>
        <input type="color" value={traitValue} onChange={this.handleChange} />
      </StyledDiv>
    );
  }
}

export default TraitColor;
