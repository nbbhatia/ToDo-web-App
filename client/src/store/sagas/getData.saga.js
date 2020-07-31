import { put, call } from "redux-saga/effects";
import {
  getDataService,
  addDataService,
  deleteDataService,
} from "../services/getDataService";

import {
  getDataActionSuccess,
  addDataActionSuccess,
  deleteDataActionSuccess,
} from "../actions/getdata";
import * as types from "../action.types";

export function* getDataSaga() {
  try {
    const response = yield call(getDataService);

    yield put(getDataActionSuccess(response.data));
  } catch (error) {
    yield put({ type: types.GET_DATA_ERROR, error });
  }
}

export function* addDataSaga(data) {
  try {
    const response = yield call(addDataService, data);
    yield put(addDataActionSuccess(response.data));
  } catch (err) {
    yield put({ type: types.ADD_DATA_ERROR, err });
  }
}

export function* deleteDataSaga(data) {
  try {
    const response = yield call(deleteDataService, data.id);
    yield put(deleteDataActionSuccess(response.data));
  } catch (error) {
    yield put({ type: types.DETELE_DATA_ERROR, error });
  }
}
