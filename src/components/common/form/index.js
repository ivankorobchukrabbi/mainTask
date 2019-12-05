import React, { useState } from 'react';
import text from '../text';
import {toggleModal} from '../../../mixins';
import './form.scss';
import {isEmpty} from 'lodash';
import { setTask } from "../../../actions/task";
import { setModal } from "../../../actions/modal";
import { connect } from "react-redux";

const initialState = {
    name: '',
    description: '',
};

const Form = (props) => {
    const [state, setState] = useState(initialState);
    const {form} = text;

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
        props.setTask(state);
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
                    onClick={save}
                    disabled={isEmpty(state.name) || isEmpty(state.description)}>{form.buttonSave}</button>
        </form>
    );
};


const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        task: state.task.data,
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTask: (data) => dispatch(setTask(data)),
    setModal: (data) => dispatch(setModal(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
