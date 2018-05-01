import * as Actions from '../actions/Actions';

const initialState = {
  posts: null
};

function blog(state = initialState, action = null) {
  switch (action.type) {
    case Actions.GET_BLOG_CONTENT:
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state;
  }
}

export default blog;