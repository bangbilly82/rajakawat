import * as Actions from '../actions/Actions';

const initialState = {
  link: 'Home',
  background: 'transparent'
};

function header(state = initialState, action = null) {
  switch (action.type) {
    case Actions.SET_CURRENT_HEADER:
      return {
        ...state,
        link: action.link
      }
    case Actions.SET_HEADER_BACKGROUND:
      return {
        ...state,
        background: action.background
      }
    default:
      return state;
  }
}

export default header;