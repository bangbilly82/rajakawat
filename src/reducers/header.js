import * as Actions from '../actions/Actions';

const initialState = {
  link: 'Home'
};

function header(state = initialState, action = null) {
  switch (action.type) {
    case Actions.SET_CURRENT_HEADER:
      return {
        ...state,
        link: action.link
      }
    default:
      return state;
  }
}

export default header;