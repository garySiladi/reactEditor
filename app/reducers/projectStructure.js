// @flow
import {
  CREATE_PROJECT,
  ADD_COMPONENT_GRID,
  REMOVE_COMPONENT_GRID
} from '../actions/projectStructure';

const initialProjectInfo = {
  projectName: 'sample_project',
  id: '0',
  hierarchy: [
    {
      viewName: ' ',
      id: '0',
      type: 'container',
      componentData: [],
      parentID: null
    }
  ]
};

export type hierarchyComponentType = {
  viewName: string,
  id: string,
  type: string,
  componentData: any,
  parentID: ?string,
  componentID?: any
};

type initialProjectInfoType = {
  projectName: string,
  id: string,
  hierarchy: Array<hierarchyComponentType>
};

export default function projectStructure(
  state: initialProjectInfoType = initialProjectInfo,
  action: any
) {
  switch (action.type) {
    case CREATE_PROJECT:
      return Object.assign({}, state, action.data);
    case ADD_COMPONENT_GRID:
      return Object.assign({}, state, {
        hierarchy: [...state.hierarchy, action.data]
      });
    case REMOVE_COMPONENT_GRID: {
      const { hierarchy } = state;
      const foundItem = hierarchy.find(item => item.id === action.data);
      if (!foundItem) {
        return state;
      }
      return Object.assign({}, state, {
        hierarchy: [
          ...state.hierarchy.slice(0, hierarchy.indexOf(foundItem)),
          ...state.hierarchy.slice(hierarchy.indexOf(foundItem) + 1)
        ]
      });
    }
    default:
      return state;
  }
}
