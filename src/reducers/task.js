import { SET_TASK_STATE } from '../constants';
import mock from '../mock';
const initialState = {
    data: mock,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_TASK_STATE:
            return {
                data: [...state.data, action.payload]
            };
        default:
            return state;
    }
}
