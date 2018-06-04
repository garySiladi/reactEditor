// @flow
import type { hierarchyComponentType } from '../reducers/projectStructure';
import { syncComponent } from './projectStructure';

export const SELECT_COMPONENT: 'SELECT_COMPONENT' = 'SELECT_COMPONENT';
export const EMPTY_SELECT_COMPONENT: 'EMPTY_SELECT_COMPONENT' =
  'EMPTY_SELECT_COMPONENT';
export const CHANGE_COMPONENT_TRAIT: 'CHANGE_COMPONENT_TRAIT' =
  'CHANGE_COMPONENT_TRAIT';

export const selectComponent = (data: hierarchyComponentType) => ({
  type: SELECT_COMPONENT,
  data
});

export const emptySelectComponent = () => ({
  type: EMPTY_SELECT_COMPONENT
});

export const changeComponentTraitAction = (traitName: string, value: any) => ({
  type: CHANGE_COMPONENT_TRAIT,
  data: { traitName, value }
});

export const changeComponentTrait = (traitName: string, value: any) => (
  dispatch: (action: any) => void
) => {
  dispatch(changeComponentTraitAction(traitName, value));
  dispatch(syncComponent());
};
