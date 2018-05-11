import * as Actions from '../actions/Actions';

const initialState = {
  content: null
};

function faq(state = initialState, action = null) {
  switch (action.type) {
    case Actions.GET_FAQ_CONTENT:
      return {
        ...state,
        content: action.faq
      }
    default:
      return state;
  }
}

export default faq;