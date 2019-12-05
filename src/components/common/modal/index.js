import React  from 'react';
import './modal.scss';


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

export default Modal;
