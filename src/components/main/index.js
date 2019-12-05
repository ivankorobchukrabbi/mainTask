import React, {useState} from 'react';
import { connect } from 'react-redux';
import remove from '../../assets/img/icons/remove.png';
import envelope from '../../assets/img/icons/envelope.png';

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
                    <td><i className="icon-mail" style={{backgroundImage: `url(${envelope})`}}/>{item.name}</td>
                    <td>{item.description}</td>
                    <td><i className="icon-remove" style={{backgroundImage: `url(${remove})`}}/></td>
                </tr>
            )
        })
    )
};

const Main = (props) => {
    const [stateTable] = useState([
        {
            id: 1,
            name: 'My test task',
            description: 'description'
        },
        {
            id: 2,
            name: 'My test task',
            description: 'description'
        }
    ]);

    return (
        <>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {tableTemplate(stateTable)}
                </tbody>
            </table>
        </>
    );
};


const mapStateToProps = () => {
    return {

    };
};


export default connect(mapStateToProps)(Main);
