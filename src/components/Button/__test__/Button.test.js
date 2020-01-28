import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../Button';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer'

afterEach(cleanup);

it("renders without crashing", () => {

    const div = document.createElement('div')
    ReactDOM.render(<Button></Button>, div)
})

it("renders button correctly", () => {

    const {getByTestId} = render(<Button text="Click Me"></Button>)
    expect(getByTestId('add-btn')).toHaveTextContent("Click Me")
})

it("renders button correctly again", () => {

    const {getByTestId} = render(<Button text="Click Me Again"></Button>)
    expect(getByTestId('add-btn')).toHaveTextContent("Click Me Again")
})

it("matches snapshot", () => {
    const tree = renderer.create(<Button text="save" />).toJSON();
    expect(tree).toMatchSnapshot();
})