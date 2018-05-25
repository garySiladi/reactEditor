import { SELECT_COMPONENT } from '../actions/selectComponent';

function selectedComponent(state: any = {}, action: any = {}) {
  switch (action.type) {
    case SELECT_COMPONENT: {
      return action.data;
    }
    default: {
      return state;
    }
  }
}

export default selectedComponent;
