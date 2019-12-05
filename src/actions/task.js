import { ADD_TASK_STATE, DELETE_TASK_STATE, EDIT_TASK_STATE } from '../constants';

export const addTask = (data = null) => {
    return { type: ADD_TASK_STATE, payload: { data } };
};
export const editTask = (data = null) => {
    return { type: EDIT_TASK_STATE, payload: { data } };
};

export const deleteTask = (data = null) => {
    return { type: DELETE_TASK_STATE, payload: { data } };
};
