export const LOAD_RESOURCE = 'APP/LOAD_RESOURCE'
export const LOAD_RESOURCE_SUCCESS = 'APP/LOAD_RESOURCE_SUCCESS'
export const LOAD_RESOURCE_ERROR = 'APP/LOAD_RESOURCE_ERROR'

export default class BaseReducer {

    initialState = {
        isFetching: false,
        error: false,
        data: {}
    }

    reducer = (state = this.initialState, action) => {
        const func = this[action.type]

        if (!method || action.error) {
            return state
        }

        return func.call(this, state, action)
    }

    [LOAD_RESOURCE](state, action) {
        return {
          ...state,
          isFetching: true
        }
    }

    [LOAD_RESOURCE_SUCCESS](state, action) {
        return {
          ...state,
          isFetching: false,
          data: action.res.data
        }
    }

    [LOAD_RESOURCE_ERROR](state, action) {
        return {
          ...state,
          isFetching: false,
          error: action.error
        }
    }
}