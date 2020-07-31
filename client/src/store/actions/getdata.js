import * as types from "../action.types";
// get data
export const getDataAction = () => {
  return {
    type: types.GET_DATA,
  };
};
export const getDataActionSuccess = (values) => {
  return {
    type: types.GET_DATA_SUCCESS,
    values,
  };
};
// create data
export const addDataAction = (data) => {
  return {
    type: types.ADD_DATA,
    data,
  };
};
export const addDataActionSuccess = (values) => {
  return {
    type: types.ADD_DATA_SUCCESS,
    values,
  };
};
// delete data

export const deleteDataAction = (id) => {
  return {
    type: types.DETELE_DATA,
    id,
  };
};

export const deleteDataActionSuccess = (values) => {
  return {
    type: types.DETELE_DATA_SUCCESS,
    values,
  };
};
