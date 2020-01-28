import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './../ToDo';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'

afterEach(cleanup);

it("renders without crashing", () => {

    const div = document.createElement('div')
    ReactDOM.render(<ToDo />, div)
})

it("renders todo correctly", () => {

    const {getByTestId} = render(<ToDo text="Note One" status="pending" ></ToDo>)
    expect(getByTestId('test-todo')).toHaveTextContent("Note One")
})