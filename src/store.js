/*Creation of store for state management*/

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { getDataReducer } from './Reducers/GetDataReducer.js';
import { updateDateReducer } from './Reducers/UpdateDateReducer.js';


/*function to save state to Local Storage. This is to help preserving the states on page refresh*/
function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem('state', serialisedState)
    }
    catch (e) {
        console.log (e)
    }
}
/*function to get state from Local Storage. This is to help get the preserved states on page refresh*/
function loadFromoLocalStorage() {
    try {
        const serialisedState = localStorage.getItem('state')
        if (serialisedState === null) 
            return undefined
            return JSON.parse(serialisedState)
            }
    catch (e) {
        console.log(e);
        return undefined
    }
}



const logger = createLogger();

const persistedState = loadFromoLocalStorage()

const rootreducer = combineReducers({
    carbon: getDataReducer,
    chosenDate: updateDateReducer
   
})


const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(rootreducer, persistedState,  composeEnhancer(applyMiddleware(thunk, logger)))

store.subscribe(() => saveToLocalStorage(store.getState()))
export default store