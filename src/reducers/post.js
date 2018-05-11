import * as Actions from '../actions/Actions';

const initialState = {
  content: null
};

function post(state = initialState, action = null) {
  switch (action.type) {
    case Actions.GET_POST_CONTENT:
      return {
        ...state,
        content: action.content
      }
    default:
      return state;
  }
}

export default post;