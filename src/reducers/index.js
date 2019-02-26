import blog from './blog';
import loader from './loader';
import header from './header';
import faq from './faq';
import post from './post';
import services from './services';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  blog,
  loader,
  header,
  faq,
  post,
  services
});

export default rootReducer;