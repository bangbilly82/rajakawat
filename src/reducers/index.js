import blog from './blog';
import header from './header';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  blog,
  header
});

export default rootReducer;