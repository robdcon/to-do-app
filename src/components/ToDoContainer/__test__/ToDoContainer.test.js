import React from 'react';
import ReactDOM from 'react-dom';
import ToDoContainer from './../ToDoContainer';
import ToDo from './../../ToDo';
import { render, cleanup, fireEvent, queryByTestId, queryAllByTestId, getAllByTestId, waitForElementToBeRemoved} from '@testing-library/react';
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

const testStateData = {
    uniqueId:0,
    toDoList:toDoList
  }

it("renders without crashing", () => {

    const div = document.createElement('div');
    ReactDOM.render(<ToDoContainer></ToDoContainer>, div);

})

test("Renders correct text when toDoList is empty", () => {

    const {getByText} = render(<ToDoContainer />);
    expect(getByText(/Nothing To Do!/i)).toBeTruthy();
})

test("Renders correct ToDos  when toDoList is not empty", () => {

    const {getAllByTestId} = render(<ToDoContainer></ToDoContainer>);
    const listItems = getAllByTestId('todo-list-li').map(li => li.textContent);
    const fakeListItemsText = toDoList.map(li => li.text);
    expect(listItems).toEqual(fakeListItemsText);
})


// Test not working as expected - requires research and development
// test("removes the ToDo when clicked",  () => {

//     const div = document.createElement('div');
//     const {queryAllByTestId, queryByTestId, queryByText, getAllByTestId} = render(<ToDoContainer></ToDoContainer>, div);
//     const listItems = getAllByTestId('todo-list-li').map(li => li.textContent);
//     const listItemsLength = listItems.length;
//     const targetItem = queryByText('test to do one');
//     fireEvent.click(getAllByTestId('remove-todo')[0]);
//    // await waitForElementToBeRemoved(() => queryByText('test to do one'))
//     expect(listItems.length ).toEqual(listItemsLength - 1);
    

// })

