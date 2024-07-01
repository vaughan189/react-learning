import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { incrementByAmount } from "../features/counter/counterSlice";
import { sagaActions } from "./sagaActions";

const callAPI = async ({ url, method, data }) => {
  return axios({
    url,
    method,
    data,
  });
};

export function* fetchNumberSaga() {
  try {
    let result = yield call(() =>
      callAPI({
        url: "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1",
      })
    );
    yield put(incrementByAmount(result.data[0]));
  } catch (e) {
    yield put({ type: "NUMBER_SAGA_FAILED" });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_NUMBER_SAGA, fetchNumberSaga);
}
