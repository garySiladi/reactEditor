import {
  SELECT_COMPONENT,
  EMPTY_SELECT_COMPONENT,
  CHANGE_COMPONENT_TRAIT
} from '../actions/selectComponent';

function selectedComponent(state: any = {}, action: any = {}) {
  switch (action.type) {
    case SELECT_COMPONENT: {
      return action.data;
    }
    case EMPTY_SELECT_COMPONENT: {
      return {};
    }
    case CHANGE_COMPONENT_TRAIT: {
      const { traitName, value } = action.data;
      const index = state.componentData.findIndex(
        item => item.name === traitName
      );
      const newIndex = index < 0 ? state.componentData.length : index;
      const newData = Object.assign([], state.componentData, {
        [newIndex]: { name: traitName, value }
      });
      return Object.assign({}, state, { componentData: newData });

      // const newTraits = [...state.componentData];
      // const newData = (newTraits[newIndex] = {
      //   name: traitName,
      //   value
      // });
      // return {
      //   ...state,
      //   componentData: newData
      // };
    }
    default: {
      return state;
    }
  }
}

export default selectedComponent;
