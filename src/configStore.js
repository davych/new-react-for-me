import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './redux'

const sagaMiddleware = createSagaMiddleware()
export default function configStore () {
    return {
        store: createStore(
            rootReducer,
            applyMiddleware(
                sagaMiddleware
            )
        ),
        run: sagaMiddleware.run
    }
}