import { SET_TASK_STATE } from '../constants';

export const setTask = (data = null) => {
    return { type: SET_TASK_STATE, payload: { data } };
};
