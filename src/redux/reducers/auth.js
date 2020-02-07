import {types} from '../actions';

const INIT_STATE = {
    user: {}
};

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case types.UPDATE_AUTH:
            return {...state, user: action.payload};

        default: 
            return state;
    }
}