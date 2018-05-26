// @flow

export const CREATE_PROJECT: 'CREATE_PROJECT' = 'CREATE_PROJECT';
export const ADD_COMPONENT_GRID: 'ADD_COMPONENT_GRID' = 'ADD_COMPONENT_GRID';

export const createProject = (data: any) => ({
  type: CREATE_PROJECT,
  data
});

export const addComponent = (data: any) => ({
  type: ADD_COMPONENT_GRID,
  data
});
