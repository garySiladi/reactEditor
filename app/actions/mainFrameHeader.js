export const SELECT_MAINFRAME_CATEGORY: 'SELECT_MAINFRAME_CATEGORY' =
  'SELECT_MAINFRAME_CATEGORY';
export const GENERAL_INFO: 'GENERAL_INFO' = 'GENERAL_INFO';
export const PLASMA_VIEW: 'PLASMA_VIEW' = 'PLASMA_VIEW';
export const LIVE_VIEW: 'LIVE_VIEW' = 'LIVE_VIEW';

export type mainframeCategoryType =
  | typeof GENERAL_INFO
  | typeof PLASMA_VIEW
  | typeof LIVE_VIEW;

export const selectMainframeCategory = (data: mainframeCategoryType) => ({
  type: SELECT_MAINFRAME_CATEGORY,
  data
});
