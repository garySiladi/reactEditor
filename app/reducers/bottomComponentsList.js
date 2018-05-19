// @flow
import defaultComponents from '../config/default-components';
import type { componentType } from '../types/component';

type bottomComponentListType = Array<componentType>;

function bottomComponentsList(
  state: bottomComponentListType = defaultComponents,
  action: any = {}
) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default bottomComponentsList;
