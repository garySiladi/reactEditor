// @flow
import type { hierarchyComponentType } from '../reducers/projectStructure';

export const SELECT_COMPONENT: 'SELECT_COMPONENT' = 'SELECT_COMPONENT';

export const selectComponent = (data: hierarchyComponentType) => ({
  type: SELECT_COMPONENT,
  data
});
