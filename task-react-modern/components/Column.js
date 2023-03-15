import React from 'react';
import Task from './Task';


// eslint-disable-next-line react/prefer-stateless-function
function Column(props) {
    // eslint-disable-next-line react/prop-types
    const { id, name, limit, tasks } = props;

    const colTasks = tasks.filter((elem) => parseInt(elem.idColumn, 10) === id);
    return (
        <ul style={{ border: '1px solid black', listStyleType: 'none' }}>
            <li>Numer kolumny: {id}</li>
            <li>Nazwa: {name}</li>
            <li>Limit zadań: {limit}</li>
            {colTasks.slice(0, limit).map((el) => (
                <Task id={el.id} name={el.name} idColumn={el.idColumn} user={el.user} />
            ))}
        </ul>
    );
};

export default Column;
