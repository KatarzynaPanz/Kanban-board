// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components';

const StyledTitle = styled.h1`
    text-align: center;
    margin-top: 5px;
`;

const StyledParagraph = styled.p`
    text-align: center;
    padding: 8px;
    font-size: 15px;
`;

const StyledDiv = styled.div`
    border: 1px solid black;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
    border-radius: 30px;
`;

const FieldContainer = styled.div`
    display: flex;
`;

const FieldName = styled.label`
    margin-left: 20px;
    width: 130px;
    padding-top: 10px;
    padding-bottom: 8px;
    padding-right: 8px;
    padding-left: 8px;
    font-size: 13px;
`;

const StyledInput = styled.input`
    border: 1px solid black;
    width: 210px;
    margin-right: 10px;
    padding: 5px;
    margin: 5px;
    border-radius: 30px;
    &:hover {
        background-color: #c8c8c8;
        border: 1px solid black;
    }
`;

const StyledSumbitInput = styled.input`
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 5px;
    margin-bottom: 10px;
    display: flex;
    background-color: #888888;
    border: 1px solid #888888;
    border-radius: 30px;
    color: white;
    &:hover {
        background-color: #a8a8a8;
        border: 1px solid #a8a8a8;
    }
`;

const ColumnList = styled.ul`
    margin-right: auto;
    margin-left: auto;
    border: 1px solid black;
    list-style-type: none;
    padding-top: 10px;
    text-align: center;
    width: 165px;
    border-radius: 10px;
`;

const IdElement = styled.li`
    font-weight: bold;
`;

const StyledColumnListName = styled.li`
    font-size: 14px;
`;

const StyledTasksLimit = styled.li`
    font-size: 14px;
    padding-bottom: 10px;
`;

const StyledTask = styled.ul`
    border: 1px solid black;
    border-radius: 10px;
    list-style-type: none;
    padding: 5px;
    margin: 5px;
    font-size: 12px;
    text-align: left;
    background: white;
`;

const StyledButton = styled.button`
    height: 12px;
    width: 12px;
    font-size: 10px;
    //padding: 3px;
    font-weight: bold;
    background-color: #888888;
    border: 1px solid #888888;
    border-radius: 50%;
    color: white;
    &:hover {
        background-color: #a8a8a8;
        border: 1px solid #a8a8a8;
    }
`;

const StyledMoveButtons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledContainerDeleteButton = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledDeleteButton = styled.button`
    background-color: #888888;
    border: 1px solid #888888;
    border-radius: 30px;
    font-size: 10px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-right: 10px;
    padding-left: 10px;
    color: white;
    &:hover {
        background-color: #a8a8a8;
        border: 1px solid #a8a8a8;
    }
`;

export {
    StyledTitle,
    FieldContainer,
    StyledDiv,
    StyledParagraph,
    FieldName,
    StyledInput,
    StyledSumbitInput,
    ColumnList,
    IdElement,
    StyledColumnListName,
    StyledTasksLimit,
    StyledTask,
    StyledButton,
    StyledMoveButtons,
    StyledDeleteButton,
    StyledContainerDeleteButton,
};
