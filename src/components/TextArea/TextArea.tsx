import React, {useState} from 'react';
import PropTypes from 'prop-types';
//import { Test } from './TextArea.styles';

interface Props {
  text:string,
  i:number,
  o:{},
  a?:Array<Object>
}

const TextArea: React.FC<Props> = (props) => {
  const [inputText , setInputText] = useState('');


  return(
  <div className="TextAreaWrapper">
    {inputText}
    <button onClick={() => setInputText('Hello!!!')}></button>
  </div>
  )
};

TextArea.propTypes = {
  // bla: PropTypes.string,
};

TextArea.defaultProps = {
  // bla: 'test',
};

export default TextArea;
