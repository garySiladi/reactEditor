// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import getColor from '../config/colors';
import ComponentSelector from './ComponentSelector';

const MainViewWithStyle = styled.div`
  background: ${getColor('whitey')};
  color: ${getColor('secondary')};
  display: flex;
  font-family: Quicksand;
  height: 100vh;
  justify-content: space-between;
`;

const LeftSideWithStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 200px);
`;

const UpperSideWithStyle = styled.div`
  background: white;
  height: 100%;
`;

const LowerSideWithStyle = styled.div`
  flex: 0 0 200px;
  border-top: 1px solid ${getColor('greyhound')};
`;

const RightSideWithStyle = styled.div`
  flex: 0 0 200px;
  border-left: 1px solid ${getColor('greyhound')};
`;

type Props = {};

class MainViewComponent extends Component<Props> {
  props: Props;
  render() {
    return (
      <MainViewWithStyle>
        <LeftSideWithStyle>
          <UpperSideWithStyle>UPPER</UpperSideWithStyle>
          <LowerSideWithStyle>
            <ComponentSelector />
          </LowerSideWithStyle>
        </LeftSideWithStyle>
        <RightSideWithStyle>RIGHTSIDE</RightSideWithStyle>
      </MainViewWithStyle>
    );
  }
}

export default MainViewComponent;
