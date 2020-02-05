import React from 'react';
import ReactDOM from 'react-dom';
import ToDoContainer from './../ToDoContainer';
import { render, cleanup} from '@testing-library/react';
// import { getByText, toBeInTheDocument } from '@testing-library/jest-dom';
import renderer from 'react-test-renderer'
import ToDoList from '../../ToDoList';

const toDoList = [
    {
        id:0,
        text:'test to do one',
        done:false
    },
    {
        id:1,
        text:'test to do two',
        done:false
    }
]

it("renders without crashing", () => {

    const div = document.createElement('div');
    ReactDOM.render(<ToDoContainer></ToDoContainer>, div);

})

test("Renders correct text when toDoList is empty", () => {

    const {getByText} = render(<ToDoContainer />);
    expect(getByText(/Nothing To Do!/i)).toBeTruthy();
})

test("Renders a ToDo  when toDoList is not empty", () => {

    const {getAllByTestId} = render(<ToDoContainer toDoList={toDoList}><ToDoList toDoList={toDoList} /></ToDoContainer>);
    const listItems = getAllByTestId('todo-list-li').map(li => li.textContent);
    const fakeListItemsText = toDoList.map(li => li.text);
    expect(listItems).toEqual(fakeListItemsText);
})