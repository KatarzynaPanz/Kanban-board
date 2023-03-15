import React, { useState, useEffect, useContext } from 'react';
import Board from './Board';
import Form from './Form';
import { TaskContext, ColumnContext } from '../src/context';

function App() {
    const [form, setForm] = useState({
        id: '',
        name: '',
        idColumn: '',
        user: '',
    });

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const columns = [
        { id: 1, name: 'Pending', limit: 6 },
        { id: 2, name: 'Analysis - doing', limit: 3 },
        { id: 3, name: 'Analysis - done', limit: 3 },
        { id: 4, name: 'Development - doing', limit: 5 },
        { id: 5, name: 'Development - done', limit: 5 },
        { id: 6, name: 'Test', limit: 3 },
        { id: 7, name: 'Deploy', limit: 5 },
    ];

    // eslint-disable-next-line consistent-return
    const readLocalStorage = (key) => {
        const item = window.localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
    };

    const useLocalStorage = (key, defaultValue) => {
        const [storageValue, setStorageValue] = useState(
            () => readLocalStorage(key) || defaultValue
        );
        React.useEffect(() => {
            window.localStorage.setItem(key, JSON.stringify(storageValue));
        }, [storageValue, key]);
        return [storageValue, setStorageValue];
    };

    const [tasks, setTasks] = useLocalStorage('tasks', []);

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log(tasks);
    });

    const columnContent = (idColumn) => {
        let taskContent = 0;
        tasks.forEach((el) => {
            // eslint-disable-next-line no-plusplus
            if (parseInt(el.idColumn, 10) === idColumn) taskContent++;
        });
        return taskContent;
    };

    const inputChange = (name, value) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    // Próbowałam wyczyścić pola formularza, ale nie działa, nie wiem dlaczego?
    /* const clearFormFields = () => {
        setForm({ id: '', name: '', idColumn: '', user: '' });
    }; */

    const addTask = () => {
        if (
            columnContent(parseInt(form.idColumn, 10)) <
            columns[parseInt(form.idColumn, 10) - 1].limit
        ) {
            setTasks([...tasks, form]);
        } else {
            // eslint-disable-next-line no-alert
            alert('W kolumnie jest max zadań!');
        }
    };

    const removeTask = (_id) => {
        // czy tak jak poniżej jest ok? Kopia się tworzy poprzez filter
        setTasks(tasks.filter((el) => parseInt(el.id, 10) !== parseInt(_id, 10)));
    };

    const moveTask = (_id, _idColumn) => {
        // eslint-disable-next-line no-underscore-dangle
        if (columnContent(parseInt(_idColumn, 10) + 1) < columns[_idColumn].limit) {
            const currTasks = tasks.filter(
                (el) =>
                    !(
                        parseInt(el.id, 10) === parseInt(_id, 10) &&
                        parseInt(el.idColumn, 10) === parseInt(_idColumn, 10)
                    )
            );
            const changedTask = tasks.filter((el) => parseInt(el.id, 10) === parseInt(_id, 10))[0];
            changedTask.idColumn = parseInt(changedTask.idColumn, 10) + 1;
            if (parseInt(changedTask.idColumn, 10) <= columns.length) {
                currTasks.push(changedTask);
            }
            setTasks(currTasks);
        } else {
            // eslint-disable-next-line no-alert
            alert('W następnej kolumnie jest max zadań!');
        }
    };

    const undoTask = (_id, _idColumn) => {
        if (columnContent(parseInt(_idColumn, 10) - 1) < columns[_idColumn - 2].limit) {
            const currTasks = tasks.filter(
                (el) =>
                    !(
                        parseInt(el.id, 10) === parseInt(_id, 10) &&
                        parseInt(el.idColumn, 10) === parseInt(_idColumn, 10)
                    )
            );
            const changedTask = tasks.filter((el) => parseInt(el.id, 10) === parseInt(_id, 10))[0];
            changedTask.idColumn = parseInt(changedTask.idColumn, 10) - 1;
            if (parseInt(changedTask.idColumn, 10) <= columns.length) {
                currTasks.push(changedTask);
            }
            setTasks(currTasks);
        } else {
            // eslint-disable-next-line no-alert
            alert('W poprzedniej kolumnie jest max zadań!');
        }
    };

    return (
        <>
            <Form change={inputChange} add={addTask} />
            <ColumnContext.Provider value={{ columns }}>
                <TaskContext.Provider value={{ moveTask, removeTask, undoTask }}>
                    <Board tasks={tasks} />
                </TaskContext.Provider>
            </ColumnContext.Provider>
        </>
    );
}

export default App;
