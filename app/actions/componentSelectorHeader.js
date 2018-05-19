// @flow

import type { bottomCategoryStateType } from '../types/componentSelectorHeader';
import {
  COMPONENTS,
  CONTAINERS,
  CUSTOM
} from '../types/componentSelectorHeader';

export const SELECT_BOTTOM_CATEGORY: 'SELECT_BOTTOM_CATEGORY' =
  'SELECT_BOTTOM_CATEGORY';

export const changeBottomCategory = (data: bottomCategoryStateType) => (
  dispatch: (action: any) => void,
  getState: () => Object
) => {
  const {
    bottomComponentsList,
    bottomContainersList,
    bottomCustomList
  } = getState();

  const newList = () => {
    switch (data) {
      case COMPONENTS:
        return bottomComponentsList;
      case CONTAINERS:
        return bottomContainersList;
      case CUSTOM:
        return bottomCustomList;
      default:
        return bottomComponentsList;
    }
  };

  dispatch({
    type: SELECT_BOTTOM_CATEGORY,
    data,
    newList: newList()
  });
};
