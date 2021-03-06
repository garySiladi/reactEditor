// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import getColor from '../config/colors';
import { getTypography, baseStep } from '../config/style-constants';
import {
  GENERAL_INFO,
  PLASMA_VIEW,
  LIVE_VIEW
} from '../actions/mainFrameHeader';

const headerTabs = [
  {
    name: PLASMA_VIEW,
    title: 'PLASMA EDITOR'
  },
  {
    name: LIVE_VIEW,
    title: 'LIVE VIEW'
  },
  {
    name: GENERAL_INFO,
    title: 'GENERAL INFO'
  }
];

type Props = {
  mainFrameSelector: string,
  selectMainframeCategory: string => {}
};

const StyledHeaderCategoryWrapper = styled.div`
  padding: ${baseStep(-2)};
  display: flex;
  min-height: 20px;
  background: ${getColor('toolbar')};
  border-bottom: 1px solid ${getColor('greyhound')};
`;

const StyledHeaderCategory = styled.div`
  font-family: Titillium Web;
  margin-right: ${baseStep(0)};
  transition: 0.2s color;
  ${getTypography(-1)};
  cursor: pointer;
  color: ${props => getColor(props.selected ? 'secondary' : 'greyhound')};

  &:hover {
    color: ${getColor('secondary')};
  }
`;

export default class MainFrameHeader extends Component<Props> {
  render() {
    return (
      <StyledHeaderCategoryWrapper>
        {headerTabs.map(child => (
          <StyledHeaderCategory
            key={child.name}
            selected={this.props.mainFrameSelector === child.name}
            onClick={() => this.props.selectMainframeCategory(child.name)}
          >
            {child.title}
          </StyledHeaderCategory>
        ))}
      </StyledHeaderCategoryWrapper>
    );
  }
}
