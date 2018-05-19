// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import getColor from '../config/colors';
import { getTypography, baseStep } from '../config/style-constants';
import type { bottomCategoryStateType } from '../types/componentSelectorHeader';
import categories from '../config/default-categories';

type Props = {
  changeBottomCategory: (category: bottomCategoryStateType) => {},
  bottomCategoryState: bottomCategoryStateType
};

const StyledComponentSelectorHeader = styled.div`
  padding: ${baseStep(-2)};
  display: flex;
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

export default class ComponentSelectorHeader extends Component<Props> {
  props: Props;
  render() {
    return (
      <StyledComponentSelectorHeader>
        {categories.map(child => (
          <StyledHeaderCategory
            key={child.categoryName}
            selected={this.props.bottomCategoryState === child.categoryName}
            onClick={() => this.props.changeBottomCategory(child.categoryName)}
          >
            {child.categoryName}
          </StyledHeaderCategory>
        ))}
      </StyledComponentSelectorHeader>
    );
  }
}
