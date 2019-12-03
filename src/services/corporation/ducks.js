import createAction from '../createAction'
import BaseReducer from '../baseReducer'

const createCorporationAction = createAction('create_corporation')

const createCorporationReducer = new BaseReducer(createCorporationAction)

const actions = { createCorporationAction }
const reducers = { createCorporationReducer }

export {
    actions, reducers
}
