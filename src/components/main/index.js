import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import remove from '../../assets/img/icons/remove.png';
import envelope from '../../assets/img/icons/envelope.png';
import {deleteTask} from '../../actions/task';
import text from '../common/text';


import './main.scss';


const Main = (props) => {
    const { task } = props;
    const { table } = text;
    const [stateTable, setStateTable] = useState( task || []);

    const deleteTask = (id) => {
        props.deleteTask(id)
    };

    useEffect(() => {
        setStateTable(task);
    }, [task]);

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
                        <td><i className="icon-remove"
                               onClick={() => deleteTask(item.id)}
                               style={{ backgroundImage: `url(${remove})` }} /></td>
                    </tr>
                )
            })
        )
    };

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {table.header.map((item, index) => (<th key={index}>{item}</th>))}
                    </tr>
                </thead>
                <tbody>
                  {tableTemplate(stateTable, deleteTask)}
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

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (data) => dispatch(deleteTask(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
