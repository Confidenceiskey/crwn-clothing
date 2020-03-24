import shopActionTypes from './shop.types.js';

const INITIAL_STATE = {
  collections: null,
  errorMessage: '',
  isFetching: false,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START: 
      return {
        ...state,
        isFetching: true
      };
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false
      };
    case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};

export default shopReducer;
