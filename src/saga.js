
import { all } from 'redux-saga/effects'
import corporationFlow from './services/corporation'
export default function* rootSaga() {
    yield all([
        corporationFlow()
    ])
}