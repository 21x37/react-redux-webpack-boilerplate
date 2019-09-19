import { SAVE_LAST_POSITION } from '../types/types';

const playerPositionsReducer = (state = [], action) => {
    switch (action.type) {
        case SAVE_LAST_POSITION:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default playerPositionsReducer