// @flow
import defaultCustomComponents from '../config/custom-components';
import type { componentType } from '../types/component';

type bottomCustomListType = Array<componentType>;

function bottomCustomList(
  state: bottomCustomListType = defaultCustomComponents,
  action: any = {}
) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default bottomCustomList;
