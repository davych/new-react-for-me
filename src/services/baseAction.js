
import {
    LOAD_RESOURCE,
    LOAD_RESOURCE_SUCCESS,
    LOAD_RESOURCE_ERROR
} from './baseReducer'
export default class BaseActions {
    service = {}
    
    fetching = { type: LOAD_RESOURCE }
    fetchSuccess = data => ({ type: LOAD_RESOURCE_SUCCESS, data })
    fetchError = error => ({ type: LOAD_RESOURCE_ERROR, error })

    find = (query) => (dispatch) => {
        dispatch(this.fetching)
        return this.service.find({ query })
                .then(res => this.fetchSuccess(res.data))
                .catch(error => this.fetchError(res.JSON()))
    }

    findById = (id) => (dispatch) => {
        dispatch(this.fetching)
        return this.service.findById({ id })
                .then(res => this.fetchSuccess(res.data))
                .catch(error => this.fetchError(res.JSON()))
    }

    create = (payload) => (dispatch) => {
        dispatch(this.fetching)
        return this.service.create({ payload })
                .then(res => this.fetchSuccess(res.data))
                .catch(error => this.fetchError(res.JSON()))
    }

    update = ({ payload, id }) => (dispatch) => {
        dispatch(this.fetching)
        return this.service.update({ payload, id })
                .then(res => this.fetchSuccess(res.data))
                .catch(error => this.fetchError(res.JSON()))
    }
}