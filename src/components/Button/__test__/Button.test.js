import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../Button';
import { render } from '@testing-library/react';
import 'jest-dom/extend-expect';

it("renders without crashing", () => {

    const div = document.createElement('div')
    ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly", () => {

    const {getByTestId} = render(<Button text="Click Me"></Button>)
    expect(getByTestId('add-btn')).toHaveTextContent("Click Me")
})