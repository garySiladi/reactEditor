// @flow
import type { componentType } from '../types/component';

export const SELECT_COMPONENT: 'SELECT_COMPONENT' = 'SELECT_COMPONENT';

export const selectComponent = (data: componentType) => ({
  type: SELECT_COMPONENT,
  data
});
