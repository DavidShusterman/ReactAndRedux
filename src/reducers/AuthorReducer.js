import * as types from '../constants/actionTypes';
import * as initialState from './initialState';

export default function authorReducer(state = initialState.default.authors ,action) {
    switch (action.type) {
        case types.LOAD_AUTHORS_SUCCESS:
            return action.authors;
    
        default:
            return state;
    }
}