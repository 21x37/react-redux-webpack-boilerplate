import { UPDATE_CORDINATES } from '../types/types';

const gamePieceCordinates = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_CORDINATES:
            console.log(action);
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export default gamePieceCordinates;