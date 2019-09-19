import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gamePieceCordinates from '../reducers/gamePieceCordinates';
import playerPositionsReducer from '../reducers/playerPositionsReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            gamePieceCordinates,
            playerPositions: playerPositionsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};