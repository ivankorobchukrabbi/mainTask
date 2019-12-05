import { SET_TASK_STATE } from '../constants';

const initialState = {
    data: [],
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
