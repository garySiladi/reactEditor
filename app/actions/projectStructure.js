// @flow

import type {
  hierarchyComponentType,
  initialProjectInfoType
} from '../reducers/projectStructure';
import { emptySelectComponent } from './selectComponent';

export const CREATE_PROJECT: 'CREATE_PROJECT' = 'CREATE_PROJECT';
export const ADD_COMPONENT_GRID: 'ADD_COMPONENT_GRID' = 'ADD_COMPONENT_GRID';
export const REMOVE_COMPONENT_GRID: 'REMOVE_COMPONENT_GRID' =
  'REMOVE_COMPONENT_GRID';
export const UPDATE_COMPONENT_GRID: 'UPDATE_COMPONENT_GRID' =
  'UPDATE_COMPONENT_GRID';

export const createProject = (data: any) => ({
  type: CREATE_PROJECT,
  data
});

export const addComponent = (data: hierarchyComponentType) => ({
  type: ADD_COMPONENT_GRID,
  data
});

export const removeComponentAction = (data: string) => ({
  type: REMOVE_COMPONENT_GRID,
  data
});

export const updateHierarchy = (data: any) => ({
  type: UPDATE_COMPONENT_GRID,
  data
});

export const removeComponent = (data: string) => (
  dispatch: (action: any) => void
) => {
  dispatch(emptySelectComponent());
  dispatch(removeComponentAction(data));
};

export function syncComponent() {
  return (
    dispatch: (action: any) => void,
    getState: () => {
      selectedComponent: hierarchyComponentType,
      projectStructure: initialProjectInfoType
    }
  ) => {
    const { selectedComponent, projectStructure } = getState();
    const foundComponentIndex = projectStructure.hierarchy.findIndex(
      comp => comp.id === selectedComponent.id
    );
    const newHierarchy = [...projectStructure.hierarchy];
    newHierarchy[foundComponentIndex] = selectedComponent;
    dispatch(updateHierarchy(newHierarchy));
  };
}
