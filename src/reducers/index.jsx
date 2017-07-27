'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appState from './appState';

export default combineReducers({
	routing: routerReducer,
	appState
});