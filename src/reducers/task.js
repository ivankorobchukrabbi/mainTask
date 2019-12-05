import { ADD_TASK_STATE, DELETE_TASK_STATE, EDIT_TASK_STATE } from '../constants';
import mock from '../mock';
import {remove} from 'lodash';

const initialState = {
    data: JSON.parse(localStorage.getItem('task')) || mock,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK_STATE:
            const id = state.data.length ? state.data[state.data.length - 1].id + 1 : 1;
            const addData = [...state.data, {id, ...action.payload.data}];
            localStorage.setItem('task', JSON.stringify(addData));
            return {
                data: addData
            };
        case EDIT_TASK_STATE:
            const actionData = action.payload.data;
            const editData = [...state.data.map(item => {
                if(item.id === actionData.id) {
                    return actionData;
                }
                return item;
            })];
            localStorage.setItem('task', JSON.stringify(editData));
            return {
                data: editData
            };
        case DELETE_TASK_STATE:
            const removeData = remove(state.data, (item) => item.id !== action.payload.data);
            localStorage.setItem('task', JSON.stringify(removeData));
            return {
                data: removeData
            };
        default:
            return state;
    }
}
