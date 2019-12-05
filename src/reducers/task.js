import { ADD_TASK_STATE, DELETE_TASK_STATE } from '../constants';
import mock from '../mock';
import {remove} from 'lodash';

const initialState = {
    data: mock,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK_STATE:
            const id = state.data.length ? state.data[state.data.length - 1].id + 1 : 1;
            return {
                data: [...state.data, {id, ...action.payload.data}]
            };
        case DELETE_TASK_STATE:
            return {
                data: remove(state.data, (item) => item.id !== action.payload.data)
            };
        default:
            return state;
    }
}
