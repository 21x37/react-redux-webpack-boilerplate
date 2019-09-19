import { UPDATE_CORDINATES, SAVE_LAST_POSITION } from '../types/types';

export const updateCordinates = (payload) => ({
    type: UPDATE_CORDINATES,
    payload
})

export const saveLastPosition = (payload) => ({
    type: SAVE_LAST_POSITION,
    payload
})