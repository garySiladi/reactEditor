// @flow

export const PROJECT_OPENED: 'PROJECT_OPENED' = 'PROJECT_OPENED';

export const openProject = (data: boolean) => ({
  type: PROJECT_OPENED,
  data
});
