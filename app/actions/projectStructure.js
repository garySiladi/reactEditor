// @flow

import type { hierarchyComponentType } from '../reducers/projectStructure';

export const CREATE_PROJECT: 'CREATE_PROJECT' = 'CREATE_PROJECT';
export const ADD_COMPONENT_GRID: 'ADD_COMPONENT_GRID' = 'ADD_COMPONENT_GRID';
export const REMOVE_COMPONENT_GRID: 'REMOVE_COMPONENT_GRID' =
  'REMOVE_COMPONENT_GRID';

export const createProject = (data: any) => ({
  type: CREATE_PROJECT,
  data
});

export const addComponent = (data: hierarchyComponentType) => ({
  type: ADD_COMPONENT_GRID,
  data
});

export const removeComponent = (data: string) => ({
  type: REMOVE_COMPONENT_GRID,
  data
});
