import React from 'react';
import { connect } from 'react-redux';
import plus from '../../assets/img/icons/plus.png';
import { setModal } from '../../actions/modal';
import PT from 'prop-types';
import {toggleModal} from '../../mixins';
import text from '../common/text';

import './header.scss';

const Header = (props) => {
    const {task} = props;
    const {header} = text;
    return (
        <header>
            <div className="title">
                <p>{header.title}<span className="counter">{task.length}</span> {header.items}</p>
            </div>
            <button onClick={() => toggleModal(props)}>
                <span>{header.subTitle}</span> <i style={{backgroundImage: `url(${plus})`}}/>
            </button>
        </header>
    );
};

Header.propTypes = {
    modal: PT.shape({}).isRequired,
    task: PT.shape({}).isRequired,
    setModal: PT.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

