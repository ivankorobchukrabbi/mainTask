import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Modal from './components/common/modal';
import Form from './components/common/form';
import text from './components/common/text';
import { connect } from "react-redux";
import { setModal } from "./actions/modal";
import { toggleModal } from './mixins';
import PT from "prop-types";


const App = (props) => {
    const {modalText} = text;
    const {modal} = props;
    return (
        <div className={modal.open ? 'app active' : 'app'}>
            <div className="wrap-center">
                <div className="modal-mask" onClick={() => toggleModal(props)}/>
                <Modal title={modal.taskId ? `Task # ${modal.taskId}` : modalText.title}>
                    <Form/>
                </Modal>
                <Header />
                <Main />
            </div>
        </div>
    );
}

App.propTypes = {
    modal: PT.shape({}).isRequired,
    setModal: PT.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        modal: state.modal
    };
};

const mapDispatchToProps = (dispatch) => ({
    setModal: (data) => dispatch(setModal(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
