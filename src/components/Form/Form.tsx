import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './Form.styles';

interface FormProps {
 
  onSubmit:((event: React.FormEvent<HTMLFormElement>) => void) | undefined
}

const Form:React.FC<FormProps> = ({children}) => {

 return(

  <StyledForm className="FormWrapper">
    {children}
  </StyledForm>

 ) 

};

export default Form;
