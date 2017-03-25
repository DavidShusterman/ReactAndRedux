import * as types from '../constants/actionTypes';
import * as initialState from './initialState';

export default function courseReducer(state = initialState.default.courses,action) {
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
    
        default:
            return state;
    }
}