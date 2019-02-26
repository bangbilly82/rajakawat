import * as Actions from '../actions/Actions';

const initialState = {
  content: null
};

function services(state = initialState, action = null) {
  switch (action.type) {
    case Actions.GET_SERVICES_CONTENT:
      return {
        ...state,
        content: action.services
      }
    default:
      return state;
  }
}

export default services;