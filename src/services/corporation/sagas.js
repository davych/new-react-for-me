import { put, call, takeLatest, cancelled } from 'redux-saga/effects'
import lodash from 'lodash'
import { actions } from './ducks'
import services from './services'

const { createCorporationAction } = actions

export function* create({payload = {}}) {
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

export function* watchCreateCorporation() {
  console.log(createCorporationAction.TRIGGER)
    yield takeLatest(createCorporationAction.TRIGGER, create)
}

const corporationSagas = [watchCreateCorporation()]

export default corporationSagas