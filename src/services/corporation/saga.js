import { put, call, take, cancelled } from 'redux-saga/effects'
import lodash from 'lodash'
import { createCorporationAction } from './action'
import services from './services'

export function* create(payload = {}) {
 try {
    yield put(createCorporationAction.request())
    const res = yield call([services, services.create], { payload })
    const { data } = lodash.get(res, 'data', {})
    yield put(createCorporationAction.success({data}))
  } catch(error) {
    yield put(createCorporationAction.failure({error}))
  } finally {
    if (yield cancelled()) {
      // ... put special cancellation handling code here
    }
  }

}

export function* flow() {
    const { payload } = yield take(createCorporationAction.TRIGGER)
    yield call(create, payload)
}