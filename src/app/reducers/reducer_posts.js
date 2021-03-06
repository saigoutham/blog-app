import {FETCH_POSTS} from '../actions';
import {ADD_POST} from '../actions';
import _ from 'lodash';

export default function(state = [],action)
{
    switch(action.type)
    {
        case FETCH_POSTS:
            return [...state];
        case ADD_POST:
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}