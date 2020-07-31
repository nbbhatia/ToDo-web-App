import * as types from "../action.types";
// getReducers
export const getDataReducer = (state = {}, action) => {
  const response = action.values;

  switch (action.type) {
    case types.GET_DATA_SUCCESS:
      return response;
    case types.GET_DATA_ERROR:
      return state;
    default:
      return state;
  }
};
// create reducers
export const addDataReducer = (state = {}, action) => {
  const response = action.data;

  switch (action.type) {
    case types.ADD_DATA_SUCCESS:
      return response;
    case types.ADD_DATA_ERROR:
      return state;
    default:
      return state;
  }
};
//delete reducers
export const deleteDataReducer = (state = {}, action) => {
  const response = action.id;

  switch (action.type) {
    case types.DETELE_DATA_SUCCESS:
      return response;
    case types.DETELE_DATA_ERROR:
      return state;
    default:
      return state;
  }
};
