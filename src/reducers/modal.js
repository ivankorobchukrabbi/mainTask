import { SET_MODAL } from '../constants';

const initialState = {
    open: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_MODAL:
            return {
                open: !state.open
            };
        default:
            return state;
    }
}
