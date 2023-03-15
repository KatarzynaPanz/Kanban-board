import React from 'react';


// eslint-disable-next-line react/prefer-stateless-function
class Form extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    submitHandler = (e) => {
        e.preventDefault();
        const { add, clearForm } = this.props;
        add();
        // clearForm();
    };;

    inputChange = (e) => {
        // eslint-disable-next-line react/prop-types
        const { change } = this.props;
        const { name, value } = e.target;
        change(name, value);
    }

    render() {
        const { taskId, taskIdColumn, taskName, taskUser } = this.props;
        return (
            <section>
                <form onSubmit={this.submitHandler}>
                    <label>
                        Numer zadania:
                        <input name="id" value={taskId} onChange={this.inputChange} />
                    </label>
                    <label>
                        Nazwa zadania:
                        <input name="name" value={taskName} onChange={this.inputChange} />
                    </label>
                    <label>
                        Id kolumny:
                        <input name="idColumn" value={taskIdColumn} onChange={this.inputChange} />
                    </label>
                    <label>
                        Imię użytkownika:
                        <input name="user" value={taskUser} onChange={this.inputChange} />
                    </label>
                    <input type="submit" />
                </form>
            </section>
        );
    }
}

export default Form;
