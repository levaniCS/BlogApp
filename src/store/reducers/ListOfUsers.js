import * as actionTypes from '../actions/actionTypes';

const initialState = {
  data: null,
  followList: [],
  error: ''
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_START:
      return { ...state };
    case actionTypes.GET_USERS_SUCCESS:
      return { ...state, data: action.data };
    case actionTypes.GET_USERS_FAIL:
      return { ...state, error: action.error };
    case actionTypes.FOLLOW__USERS_HANDLER:
      return {
        ...state,
        followList: action.followList
      };
    default:
      return state;
  }
};

export default reducer;
