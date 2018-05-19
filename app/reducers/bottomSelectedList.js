// @flow
import { SELECT_BOTTOM_CATEGORY } from '../actions/componentSelectorHeader';
import defaultComponents from '../config/default-components';
import type { componentType } from '../types/component';

type bottomSelectedListType = Array<componentType>;

function bottomSelectedList(
  state: bottomSelectedListType = defaultComponents,
  action: any = {}
) {
  switch (action.type) {
    case SELECT_BOTTOM_CATEGORY: {
      return action.newList;
    }
    default: {
      return state;
    }
  }
}

export default bottomSelectedList;
