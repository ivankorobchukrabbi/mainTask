import React  from 'react';
import './modal.scss';


const Modal = (props) => {

    return (
        <div className="wrap-modal">
            <div className="modal-main">
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
