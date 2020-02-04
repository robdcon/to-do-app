import React from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  text?: string,
  type?:'submit',
  handleClick?: () => void,
  handleSubmit?: () => void
}

const Button:React.FC<Props> = (props) => (
  <div className="ButtonWrapper">
    <StyledButton data-testid="std-btn" onClick={props.handleClick} role="button">
      {props.text}
      {props.children}
    </StyledButton>
  </div>
);

export default Button;
