import { SET_MODAL } from '../constants';

export const setModal = (data = null) => {
    return { type: SET_MODAL, payload: { data } };
};
