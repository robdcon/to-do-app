import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Button.styles';

interface Props {
  text: string,
  handleClick: () => void
}

const Button:React.FC<Props> = (props) => (
  <div data-testid="std-btn" className="ButtonWrapper">
    <button onClick={props.handleClick}>{props.text}</button>
  </div>
);

export default Button;
