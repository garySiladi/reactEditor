// @flow
import {
  CREATE_PROJECT,
  ADD_COMPONENT_GRID,
  REMOVE_COMPONENT_GRID,
  UPDATE_COMPONENT_GRID
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

export type initialProjectInfoType = {
  projectName: string,
  id: string,
  hierarchy: Array<hierarchyComponentType>
};

const getResult = (id, hierarchy = []) => {
  const foundChildren = hierarchy.filter(item => item.parentID === id);
  if (foundChildren === []) return id;
  const foundChildrenIDs = foundChildren.map(item => item.id);
  if (foundChildrenIDs.length === 1) {
    // $FlowFixMe
    return getResult(foundChildrenIDs[0]).concat(id);
  }
  return foundChildrenIDs.map(idX => getResult(idX)).concat(id);
};

function flattenDeep(id, hierarchy) {
  // $FlowFixMe
  return getResult(id, hierarchy).reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}

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
      const newHierarchy = hierarchy.filter(
        item => !flattenDeep(action.data, hierarchy).some(id => id === item.id)
      );
      return Object.assign({}, state, {
        hierarchy: newHierarchy
      });
    }
    case UPDATE_COMPONENT_GRID: {
      return Object.assign({}, state, {
        hierarchy: action.data
      });
    }
    default:
      return state;
  }
}
