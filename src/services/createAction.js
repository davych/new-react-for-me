import { createRoutine } from 'redux-saga-routines'
export default function createAction(prefix) {
    return createRoutine(prefix)
}