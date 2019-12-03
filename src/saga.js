
import { all } from 'redux-saga/effects'
import corporationSagas from './services/corporation'
export default function* rootSaga() {
    console.log(corporationSagas)
    yield all([
        ...corporationSagas
    ])
}