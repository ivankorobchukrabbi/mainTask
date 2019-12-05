import React  from 'react';
import './modal.scss';
import PT from "prop-types";

const Modal = (props) => {
    return (
        <div className="wrap-modal">
            <div className="modal-main">
                <div className="modal-header">
                    {props.title}
                    <i />
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    title: PT.string.isRequired,
    children: PT.node.isRequired,
};

export default Modal;
