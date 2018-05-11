import * as Actions from '../actions/Actions';

const initialState = {
  loading: false
};

function loader(state = initialState, action = null) {
  switch (action.type) {
    case Actions.HIDE_LOADER:
      return {
        ...state,
        loading: action.loading
      }
    default:
      return state;
  }
}

export default loader;