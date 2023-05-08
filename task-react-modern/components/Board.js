import React, { useContext } from 'react';
import Column from './Column';
import { ColumnContext } from '../src/context';

// eslint-disable-next-line react/prefer-stateless-function
function Board(props) {
    const { tasks } = props;
    const { columns } = useContext(ColumnContext);
    return (
        <section style={{ display: 'flex' }}>
            {columns.map((el) => (
                <Column id={el.id} name={el.name} limit={el.limit} color={el.color} tasks={tasks} />
            ))}
        </section>
    );
}

export default Board;
