import React  from 'react';
import './modal.scss';
import PT from "prop-types";
import remove from "../../../assets/img/icons/remove.png";
import { toggleModal } from "../../../mixins";
import { setModal } from "../../../actions/modal";
import { connect } from "react-redux";

const Modal = (props) => {
    return (
        <div className="wrap-modal">
            <div className="modal-main">
                <div className="modal-header">
                    {props.title}
                    <i onClick={() => toggleModal(props)} style={{ backgroundImage: `url(${remove})` }} />
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
const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        task: state.task.data,
    };
};

const mapDispatchToProps = (dispatch) => ({
    setModal: (data) => dispatch(setModal(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
