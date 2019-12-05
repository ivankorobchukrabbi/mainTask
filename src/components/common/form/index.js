import React, { useEffect, useState } from 'react';
import text from '../text';
import {toggleModal} from '../../../mixins';
import './form.scss';
import {isEmpty, find} from 'lodash';
import { addTask, editTask } from "../../../actions/task";
import { setModal } from "../../../actions/modal";
import { connect } from "react-redux";
import PT from "prop-types";

const initialState = {
    name: '',
    description: '',
};

const Form = (props) => {
    const {modal, task} = props;
    const [state, setState] = useState(initialState);
    const {form} = text;

    useEffect(() => {
        if(modal.taskId) {
            setState(find(task, item => item.id === modal.taskId))
        }
    }, [modal.taskId]);

    /**
     * hide modal
     * @param e
     */
    const hideModal = (e) => {
        e.preventDefault();
        setState(initialState);
        toggleModal(props);
    };
    /**
     * handle input change
     * @param e
     */
    const handleInputsChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };
    /**
     * save data task
     * @param e
     */
    const save = (e) => {
        e.preventDefault();
        hideModal(e);
        props.addTask(state);
    };

    /**
     * edit task
     * @param e
     */
    const edit = (e) => {
        e.preventDefault();
        hideModal(e);
        props.editTask(state)
    };

    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                       className="form-control"
                       id="name"
                       name="name"
                       placeholder="name"
                       value={state.name}
                       onChange={handleInputsChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control"
                          id="description"
                          name="description"
                          placeholder="description"
                          value={state.description}
                          onChange={handleInputsChange}/>
            </div>
            <button type="submit" className="btn btn-default" onClick={(e) => hideModal(e)}>{form.buttonCancel}</button>
            <button type="submit"
                    className="btn btn-success"
                    onClick={modal.taskId ? edit : save}
                    disabled={isEmpty(state.name) || isEmpty(state.description)}>
                {modal.taskId ? form.buttonEdit : form.buttonSave}
            </button>
        </form>
    );
};

Form.propTypes = {
    modal: PT.shape({
        taskId: PT.number,
        open: PT.bool || null,
    }).isRequired,
    task: PT.arrayOf(PT.shape({}).isRequired),
    setModal: PT.func.isRequired,
    addTask: PT.func.isRequired,
    editTask: PT.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        task: state.task.data,
    };
};

const mapDispatchToProps = (dispatch) => ({
    addTask: (data) => dispatch(addTask(data)),
    editTask: (data) => dispatch(editTask(data)),
    setModal: (data) => dispatch(setModal(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
