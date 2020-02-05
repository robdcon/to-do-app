import React from 'react';
import ReactDOM from 'react-dom';
import ToDoContainer from './../ToDoContainer';
import { render, cleanup} from '@testing-library/react';
// import { getByText, toBeInTheDocument } from '@testing-library/jest-dom';
import renderer from 'react-test-renderer'

it("renders without crashing", () => {

    const div = document.createElement('div')
    ReactDOM.render(<ToDoContainer></ToDoContainer>, div);

})

test("Renders No ToDo text when toDoList is empty", () => {

    const {getByText} = render(<ToDoContainer />);
    expect(getByText(/Nothing To Do!/i)).toBeTruthy()
})