import React from 'react';
import {
    StyledTitle,
    FieldContainer,
    StyledDiv,
    StyledParagraph,
    FieldName,
    StyledInput,
    StyledSumbitInput,
} from '../src/style/StyledElements';

// eslint-disable-next-line react/prefer-stateless-function
class Form extends React.Component {
    // eslint-disable-next-line class-methods-use-this
    submitHandler = (e) => {
        e.preventDefault();
        const { add, clearForm } = this.props;
        add();
        // clearForm();
    };

    inputChange = (e) => {
        // eslint-disable-next-line react/prop-types
        const { change } = this.props;
        const { name, value } = e.target;
        change(name, value);
    };

    render() {
        const { taskId, taskIdColumn, taskName, taskUser } = this.props;
        return (
            <section>
                <div>
                    <StyledTitle>Kanban board</StyledTitle>
                </div>
                <StyledDiv>
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <StyledParagraph>Add new task:</StyledParagraph>
                        </div>
                        <FieldContainer>
                            <FieldName>Task number:</FieldName>
                            <StyledInput name="id" value={taskId} onChange={this.inputChange} />
                        </FieldContainer>
                        <FieldContainer>
                            <FieldName>Task name:</FieldName>
                            <StyledInput name="name" value={taskName} onChange={this.inputChange} />
                        </FieldContainer>
                        <FieldContainer>
                            <FieldName>Column id:</FieldName>
                            <StyledInput
                                name="idColumn"
                                value={taskIdColumn}
                                onChange={this.inputChange}
                            />
                        </FieldContainer>
                        <FieldContainer>
                            <FieldName>User name:</FieldName>
                            <StyledInput name="user" value={taskUser} onChange={this.inputChange} />
                        </FieldContainer>
                        <StyledSumbitInput type="submit" value="Add" />
                    </form>
                </StyledDiv>
            </section>
        );
    }
}

export default Form;
