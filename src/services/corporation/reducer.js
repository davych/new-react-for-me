import BaseReducer from '../baseReducer'
import { createCorporationAction } from './action'
const createCorporationReducer = new BaseReducer(createCorporationAction)
export {
    createCorporationReducer
}