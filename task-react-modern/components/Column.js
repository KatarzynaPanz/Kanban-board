import React from 'react';
import Task from './Task';
import {
    ColumnList,
    IdElement,
    StyledColumnListName,
    StyledTasksLimit,
} from '../src/style/StyledElements';

// eslint-disable-next-line react/prefer-stateless-function
function Column(props) {
    // eslint-disable-next-line react/prop-types
    const { id, name, limit, color, tasks } = props;

    const colTasks = tasks.filter((elem) => parseInt(elem.idColumn, 10) === id);
    return (
        <ColumnList style={{ backgroundColor: color }}>
            <IdElement>{id}</IdElement>
            <StyledColumnListName>{name}</StyledColumnListName>
            <StyledTasksLimit>Tasks limit: {limit}</StyledTasksLimit>
            <hr />
            {colTasks.slice(0, limit).map((el) => (
                <Task id={el.id} name={el.name} idColumn={el.idColumn} user={el.user} />
            ))}
        </ColumnList>
    );
};

export default Column;
