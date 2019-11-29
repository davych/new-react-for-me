
import {
    LOAD_RESOURCE,
    LOAD_RESOURCE_SUCCESS,
    LOAD_RESOURCE_ERROR
} from './baseReducer'
export default class BaseActions {
    services = {}

    constructor ({ services }) {
        this.services = services
    }
    
    fetching = { type: LOAD_RESOURCE }
    fetchSuccess = data => ({ type: LOAD_RESOURCE_SUCCESS, data })
    fetchError = error => ({ type: LOAD_RESOURCE_ERROR, error })

    find = (query) => (dispatch) => {
        dispatch(this.fetching)
        this.services.find({ query })
                .then(res => dispatch(this.fetchSuccess(res.data)))
                .catch(error => dispatch(this.fetchError(error.toJSON())))
    }

    findById = (id) => (dispatch) => {
        dispatch(this.fetching)
        this.services.findById({ id })
                .then(res => dispatch(this.fetchSuccess(res.data)))
                .catch(error => dispatch(this.fetchError(error.toJSON())))
    }

    create = (payload) => (dispatch) => {
        dispatch(this.fetching)
        this.services.create({ payload })
                .then(res => dispatch(this.fetchSuccess(res.data)))
                .catch(error => dispatch(this.fetchError(error.toJSON())))
    }

    update = ({ payload, id }) => (dispatch) => {
        dispatch(this.fetching)
        this.services.update({ payload, id })
                .then(res => dispatch(this.fetchSuccess(res.data)))
                .catch(error => dispatch(this.fetchError(error.toJSON())))
    }
}