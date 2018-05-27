// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import getColor from '../config/colors';
// import { baseStep } from '../config/style-constants';
import DropEditor from './DropEditor';
// import DropComponent from './DropComponent';

const PlasmaEditorStyled = styled.div`
  background: white;
  color: ${getColor('primary')};
  flex-basis: 100vh;
  box-shadow: inset 0px 0px 0px 5px white;
  background-size: 10px 10px;
  background-image: linear-gradient(
      to right,
      ${getColor('greyish')},
      1px,
      transparent 1px
    ),
    linear-gradient(to bottom, ${getColor('greyish')}, 1px, transparent 1px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

type Props = {
  isPlasmaSelected: boolean
};

export default class PlasmaEditor extends Component<Props> {
  render() {
    if (!this.props.isPlasmaSelected)
      return <PlasmaEditorStyled>KORTE</PlasmaEditorStyled>;
    return (
      <PlasmaEditorStyled>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <DropEditor />
        </div>
      </PlasmaEditorStyled>
    );
  }
}
