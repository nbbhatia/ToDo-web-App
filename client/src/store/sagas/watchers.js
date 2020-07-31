import { takeLatest } from "redux-saga/effects";
import * as types from "../action.types";
import { getDataSaga, addDataSaga, deleteDataSaga } from "./getData.saga";
export default function* watchSaga() {
  yield takeLatest(types.GET_DATA, getDataSaga);
  yield takeLatest(types.ADD_DATA, addDataSaga);
  yield takeLatest(types.DETELE_DATA, deleteDataSaga);
}
