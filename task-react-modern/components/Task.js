import React, { useContext } from 'react';
import { TaskContext } from '../src/context';
import {
    StyledTask,
    StyledButton,
    StyledMoveButtons,
    StyledDeleteButton,
    StyledContainerDeleteButton,
} from '../src/style/StyledElements';

const Task = function (props) {
    const { id, name, user, idColumn } = props;
    const { moveTask, removeTask, undoTask } = useContext(TaskContext);
    return (
        <StyledTask>
            <li>Task number: {id}</li>
            <li>Task name: {name}</li>
            <li>User name: {user}</li>
            <StyledMoveButtons>
                <StyledButton onClick={(e) => undoTask(props.id, props.idColumn, e)}>
                    &lt;
                </StyledButton>
                <StyledButton onClick={(e) => moveTask(props.id, props.idColumn, e)}>
                    &gt;
                </StyledButton>
            </StyledMoveButtons>
            <StyledContainerDeleteButton>
                <StyledDeleteButton onClick={(e) => removeTask(props.id, e)}>
                    DELETE
                </StyledDeleteButton>
            </StyledContainerDeleteButton>
        </StyledTask>
    );
};

export default Task;
