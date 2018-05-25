import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import getColor from '../config/colors';
import myImage from '../assets/plasmoid.png';
import { getTypography, baseStep } from '../config/style-constants';

const FullScreenBlur = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledWelcomeComponent = styled.div`
  position: fixed;
  border-radius: ${baseStep(0)};
  background-color: ${getColor('#222')};
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  cursor: default;
`;

const StyledHeaderComponent = styled.div`
  ${getTypography(1)};
  padding: 0 ${baseStep(0)} ${baseStep(0)};
  color: ${getColor('whitey')};
`;

const StyledLogo = styled.img`
  width: 100px;
  margin: ${baseStep(0)} ${baseStep(5)};
`;

const StyledMenu = styled.div`
  background-color: ${getColor('whitey')};
  padding: ${baseStep(2)};
  align-self: stretch;
  border-radius: 0 0 ${baseStep(0)} ${baseStep(0)};
`;

const StyledButton = styled.div`
  background-color: ${getColor('#222')};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${baseStep(0)};
  border-radius: ${baseStep(0)};
  color: ${getColor('whitey')};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: ${getColor('primary')};
  }

  &:active {
    background-color: ${getColor('#222')};
  }
`;

type Props = {
  isProjectOpened: boolean,
  openProject: () => void
};

export default class WelcomeWindow extends Component<Props> {
  render() {
    if (this.props.isProjectOpened) {
      return null;
    }
    return (
      <FullScreenBlur>
        <StyledWelcomeComponent>
          <StyledLogo src={myImage} alt="App Logo" />
          <StyledHeaderComponent>Plasmoid</StyledHeaderComponent>
          <StyledMenu>
            <StyledButton onClick={() => this.props.openProject()}>
              <FontAwesome name="plus" size="2x" />
              <span>New project</span>
            </StyledButton>
          </StyledMenu>
        </StyledWelcomeComponent>
      </FullScreenBlur>
    );
  }
}
