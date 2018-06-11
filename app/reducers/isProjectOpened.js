// @flow
import { PROJECT_OPENED } from '../actions/isProjectOpened';

export default function isProjectOpened(state: boolean = false, action: any) {
  switch (action.type) {
    case PROJECT_OPENED:
      return action.data;
    default:
      return state;
  }
}
