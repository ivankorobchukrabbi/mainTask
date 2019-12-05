import { SET_MODAL } from '../constants';

const initialState = {
    open: false,
    taskId: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_MODAL:
            return {
                open: !state.open,
                taskId: action.payload.data.taskId
            };
        default:
            return state;
    }
}
