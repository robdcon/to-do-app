import React from 'react';
import ReactDOM from 'react-dom';
import TextArea from './../TextArea';
import { render, cleanup, toBeInTheDocument, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';

it("renders TextArea correctly", () => {

    const div = document.createElement('div');
    render(<TextArea />, div);
})

it("renders TextArea correctly again", () => {

    const {queryByTestId, queryByPlaceholderText} = render(<TextArea/>);
    expect(queryByTestId('test-textarea')).toBeTruthy();
    expect(queryByPlaceholderText(`What do you need to do?`)).toBeTruthy();
  
})

describe("Input value", () => {

    it('Changes input correctly', () => {

        const {queryByPlaceholderText} = render(<TextArea />);
        const textArea = queryByPlaceholderText(`What do you need to do?`);

        fireEvent.change(textArea, {target:{value:"test"}});
        expect(textArea.value).toBe("test"); 
       // expect(textArea.value).toBe("wrong text"); // Failure test throws error

    })
})

// describe("Text area input", () => {

//     describe("with empty input value", () => {

//         it("does not trigger addToDo", () => {

//             const onSubmit = jest.fn();
//             const {queryByTestId, queryByPlaceholderText} = render(<TextArea onSubmit={onSubmit} />);
//             fireEvent.click(queryByTestId('todo-submit-btn'));
//             expect(onSubmit).not.toHaveBeenCalled();


//         })
//     })
// })

