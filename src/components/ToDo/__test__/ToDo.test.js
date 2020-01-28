import React from 'react';
import ReactDOM from 'react-dom';
import ToDo from './../ToDo';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'

it("renders without crashing", () => {

    const div = document.createElement('div')
    ReactDOM.render(<ToDo />, div)
})