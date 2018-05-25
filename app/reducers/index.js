// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// import counter from './counter';
import bottomCategoryState from './componentSelectorHeader';
import bottomComponentsList from './bottomComponentsList';
import bottomContainersList from './bottomContainersList';
import bottomCustomList from './bottomCustomList';
import bottomSelectedList from './bottomSelectedList';
import selectedComponent from './selectedComponent';
import isProjectOpened from './isProjectOpened';

const rootReducer = combineReducers({
  // counter,
  bottomCategoryState,
  bottomComponentsList,
  bottomContainersList,
  bottomCustomList,
  bottomSelectedList,
  selectedComponent,
  isProjectOpened,
  router
});

export default rootReducer;
