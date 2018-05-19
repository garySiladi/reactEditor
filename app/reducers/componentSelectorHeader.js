// @flow
import { COMPONENTS } from '../types/componentSelectorHeader';
import type { bottomCategoryStateType } from '../types/componentSelectorHeader';
import { SELECT_BOTTOM_CATEGORY } from '../actions/componentSelectorHeader';

function bottomCategoryState(
  state: bottomCategoryStateType = COMPONENTS,
  action: any = {}
) {
  switch (action.type) {
    case SELECT_BOTTOM_CATEGORY: {
      return action.data;
    }
    default: {
      return state;
    }
  }
}

export default bottomCategoryState;
