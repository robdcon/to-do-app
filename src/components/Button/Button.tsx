import React from 'react';
import { StyledButton } from './Button.styles';

interface Props {
  text: string,
  type?:string,
  handleClick?: () => void,
  handleSubmit?: () => void
}

const Button:React.FC<Props> = (props) => (
  <div className="ButtonWrapper">
    <StyledButton data-testid="std-btn" type={props.type} onClick={props.handleClick}>
      {props.text}
    </StyledButton>
  </div>
);

export default Button;
