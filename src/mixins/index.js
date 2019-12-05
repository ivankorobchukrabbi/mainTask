/**
 * add new action in store for modal
 * @param props
 */
export const toggleModal = (props) => {
    const {modal, setModal} = props;
    setModal(!modal.open)
};
