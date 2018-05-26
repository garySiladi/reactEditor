// @flow
import {
  SELECT_MAINFRAME_CATEGORY,
  PLASMA_VIEW
} from '../actions/mainFrameHeader';
import type { mainframeCategoryType } from '../actions/mainFrameHeader';

export default function mainFrameSelector(
  state: mainframeCategoryType = PLASMA_VIEW,
  action: any
) {
  switch (action.type) {
    case SELECT_MAINFRAME_CATEGORY:
      return action.data;
    default:
      return state;
  }
}
