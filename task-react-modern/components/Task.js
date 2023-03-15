import React, { useContext } from 'react';
import { TaskContext } from '../src/context';

const Task = function (props) {
    const { id, name, user, idColumn } = props;
    const { moveTask, removeTask, undoTask } = useContext(TaskContext);
    return (
        <ul style={{ border: '1px solid black' }}>
            <li>{id}</li>
            <li>{name}</li>
            <li>{idColumn}</li>
            <li>{user}</li>
            <button onClick={(e) => moveTask(props.id, props.idColumn, e)}>DONE</button>
            <button onClick={(e) => undoTask(props.id, props.idColumn, e)}>BACK</button>
            <button onClick={(e) => removeTask(props.id, e)}>REMOVE</button>
        </ul>
    );
};

export default Task;
