import React from 'react';
import { connect } from 'react-redux';
import plus from '../../assets/img/icons/plus.png';
import { setModal } from '../../actions/modal';
import PT from 'prop-types';
import {toggleModal} from '../../mixins';

import './header.scss';

const Header = (props) => {
    return (
        <header>
            <div className="title">
                <p>Task list / <span className="counter">0</span> items</p>
            </div>
            <button onClick={() => toggleModal(props)}>
                <span>Create new</span> <i style={{backgroundImage: `url(${plus})`}}/>
            </button>
        </header>
    );
};

Header.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

