// @flow

import { SELECT_BOTTOM_CATEGORY } from '../actions/componentSelectorHeader';

export const COMPONENTS: 'COMPONENTS' = 'COMPONENTS';
export const CONTAINERS: 'CONTAINERS' = 'CONTAINERS';
export const CUSTOM: 'CUSTOM' = 'CUSTOM';

export type bottomCategoryStateType =
  | typeof COMPONENTS
  | typeof CONTAINERS
  | typeof CUSTOM;

export type componentSelectorHeaderActionType = {
  +type: typeof SELECT_BOTTOM_CATEGORY,
  data: bottomCategoryStateType
};
