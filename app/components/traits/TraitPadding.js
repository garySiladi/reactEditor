import * as React from 'react';
import styled from 'styled-components';
import { baseStep } from '../../config/style-constants';
import getColor from '../../config/colors';

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

type Props = {};

type State = {};

class TraitPadding extends React.Component {
  handleChange = event => {
    this.setState({
      padding: event.target.value
    });
  };
  render() {
    return (
      <StyledDiv>
        <input
          type="number"
          value={this.props.traitValue.match(/\d+/)[0]}
          onChange={this.handleChange}
          step="0.1"
          min="0"
        />
        <div style={{ marginLeft: baseStep(-2) }}>em</div>
      </StyledDiv>
    );
  }
}

export default TraitPadding;
