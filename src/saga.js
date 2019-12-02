
import { all } from 'redux-saga/effects'
import corporationSagas from './services/corporation'
export default function* rootSaga() {
    yield all([
        ...corporationSagas
    ])
}