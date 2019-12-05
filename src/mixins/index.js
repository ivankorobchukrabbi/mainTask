/**
 * add new action in store for modal
 * @param props
 * @param taskId
 */
export const toggleModal = (props, taskId = null) => {
    const {modal, setModal} = props;
    setModal({open: !modal.open, taskId: taskId})
};
