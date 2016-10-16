import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutable from 'redux-immutable-state-invariant';

export default function (initialState) {
    return (createStore(rootReducer,
        initialState,
        applyMiddleware(reduxImmutable())
    ));
}