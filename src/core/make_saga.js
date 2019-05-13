import { take, put, call, all } from 'redux-saga/effects';
import { push } from 'react-router-redux';

export default (
  { successAction, errorAction, messageAction },
  { apiMethod, redirectURL = (action, data) => '', convertData = (action, data) => data, messages }
) => (
  function* (action) {
    try {
      var data = yield call(apiMethod, action.payload);

      var successSteps = successAction(convertData(action, data));

      if (Array.isArray(successSteps)) {
        yield all(successSteps.map(step => put(step)));
      } else {
        yield put(successSteps);
      }

      if (redirectURL && !!redirectURL(action, data)) {
        yield put(push(redirectURL(action, data)));
      }
    } catch(e) {
      yield put(errorAction(e));
      if (!!messages) {
        yield put(messageAction({
          types: { error: true },
          items: [messages[e.error_code]],
          center: true
        }));
      }
    }
  }
)