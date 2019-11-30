
export default class BaseReducer {

    constructor(routine) {
        this.routine = routine

        // 
        this[this.routine.REQUEST] = (state, action) => {
            return {
              ...state,
              isFetching: true
            }
        }

        this[this.routine.SUCCESS] = (state, action) => {
            return {
              ...state,
              isFetching: false,
              data: action.data
            }
        }
    
        this[this.routine.FAILURE] = (state, action) => {
            return {
              ...state,
              isFetching: false,
              error: action.error
            }
        }

        return this.reducer
    }

    initialState = {
        isFetching: false,
        error: false,
        data: {}
    }

    reducer = (state = this.initialState, action) => {
        const func = this[action.type]
        if (!func) {
            return state
        }
        return func.call(this, state, action)
    }
}