// @flow
import defaultContainers from '../config/default-containers';
import type { componentType } from '../types/component';

type bottomContainersListType = Array<componentType>;

function bottomContainersList(
  state: bottomContainersListType = defaultContainers,
  action: any = {}
) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default bottomContainersList;
