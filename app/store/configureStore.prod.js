import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
// import type { counterStateType } from '../reducers/counter';
// import type { bottomCategoryStateType } from '../types/componentSelectorHeader';
// import type { Store, State } from '../types';

const history = createBrowserHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
}

export default { configureStore, history };
