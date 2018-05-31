// @flow
import {
  CREATE_PROJECT,
  ADD_COMPONENT_GRID
} from '../actions/projectStructure';

const initialProjectInfo = {
  projectName: 'sample_project',
  id: '0',
  hierarchy: [
    {
      viewName: ' ',
      id: '0',
      type: 'container',
      componentData: {},
      parentId: null
    }
  ]
};

export type hierarchyComponentType = {
  viewName: string,
  id: string,
  type: string,
  componentData: any,
  parentId: ?string
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
    default:
      return state;
  }
}
