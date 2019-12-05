import React, { useState } from 'react';
import { connect } from 'react-redux';
import remove from '../../assets/img/icons/remove.png';
import envelope from '../../assets/img/icons/envelope.png';
import text from '../common/text';


import './main.scss';


/**
 * return tr template for table
 * @param data
 */
const tableTemplate = (data) => {
    return (
        data.map(item => {
            return (
                <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td><i className="icon-mail" style={{ backgroundImage: `url(${envelope})` }} />{item.name}</td>
                    <td>{item.description}</td>
                    <td><i className="icon-remove" style={{ backgroundImage: `url(${remove})` }} /></td>
                </tr>
            )
        })
    )
};

const Main = (props) => {
    const { task } = props;
    const { table } = text;
    const [stateTable] = useState(task || []);

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {table.header.map(item => (<th>{item}</th>))}
                    </tr>
                </thead>
                <tbody>
                  {tableTemplate(stateTable)}
                </tbody>
            </table>
        </>
    );
};


const mapStateToProps = (state) => {
    return {
        task: state.task.data
    };
};


export default connect(mapStateToProps)(Main);
