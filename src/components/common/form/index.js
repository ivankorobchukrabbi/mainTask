import React from 'react';
import text from '../text';
import {toggleModal} from '../../../mixins';
import './form.scss';

/**
 * hide modal
 * @param props
 * @param e
 */
const hideModal = (props, e) => {
    e.preventDefault();
    toggleModal(props);
};

const Form = ({props}) => {
    const {form} = text;
    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder="name" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" placeholder="description" />
            </div>
            <button type="submit" className="btn btn-default" onClick={(e) => hideModal(props, e)}>{form.buttonCancel}</button>
            <button type="submit" className="btn btn-success">{form.buttonSave}</button>
        </form>
    );
};

export default Form;
