import { combineReducers } from 'redux';

import items from './items_reducer';

const rootReducer = combineReducers({
	items
});

export default rootReducer;