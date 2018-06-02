// @flow
import React, { Component } from 'react';
// import firebase from 'firebase';
import styled from 'styled-components';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import getColor from '../config/colors';
import { baseStep } from '../config/style-constants';
import firebaseConfig from '../config/firebaseConfig';
import ComponentSelector from './ComponentSelector';
import TraitManager from './TraitManager';
import WelcomeWindowContainer from '../containers/WelcomeWindowContainer';
import MainFrameHeaderContainer from '../containers/MainFrameHeaderContainer';
import PlasmaEditorContainer from '../containers/PlasmaEditorContainer';

const MainViewStyled = styled.div`
  background: ${getColor('toolbar')};
  color: ${getColor('secondary')};
  display: flex;
  font-family: Quicksand, sans-serif;
  height: 100vh;
  justify-content: space-between;
`;

const LeftSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 200px);
`;

const ComponentSelectorStyled = styled.div`
  flex: 0 0 200px;
  border-top: 1px solid ${getColor('greyhound')};
`;

const RightSideStyled = styled.div`
  flex: 0 0 250px;
  border-left: 1px solid ${getColor('greyhound')};
  padding: 0 ${baseStep(-2)} ${baseStep(-2)};
  display: flex;
  flex-direction: column;
`;

type Props = {};

class MainViewComponent extends Component<Props> {
  props: Props;
  componentDidMount() {
    // const fire = firebase.initializeApp(firebaseConfig); // eslint-disable-line
  }
  render() {
    return (
      <MainViewStyled>
        <DragDropContextProvider backend={HTML5Backend}>
          <LeftSideStyled>
            <WelcomeWindowContainer />
            <MainFrameHeaderContainer />
            <PlasmaEditorContainer />
            <ComponentSelectorStyled>
              <ComponentSelector />
            </ComponentSelectorStyled>
          </LeftSideStyled>
        </DragDropContextProvider>
        <RightSideStyled>
          <TraitManager />
        </RightSideStyled>
      </MainViewStyled>
    );
  }
}

export default MainViewComponent;
