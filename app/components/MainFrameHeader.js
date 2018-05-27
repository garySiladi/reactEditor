// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import getColor from '../config/colors';
import { getTypography, baseStep } from '../config/style-constants';
import { GENERAL_INFO, PLASMA_VIEW } from '../actions/mainFrameHeader';

const headerTabs = [
  {
    name: PLASMA_VIEW,
    title: 'PLASMA EDITOR'
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
  flex-basis: 30px;
  border-bottom: 1px solid ${getColor('greyhound')};
`;

const StyledHeaderCategory = styled.div`
  font-family: Titillium Web;
  margin-right: ${baseStep(0)};
  padding-bottom: ${baseStep(-4)};
  transition: 0.2s color;
  cursor: pointer;
  ${getTypography(-1)};
  border-bottom: 1px solid
    ${props => (props.selected ? getColor('secondary') : 'transparent')};
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
