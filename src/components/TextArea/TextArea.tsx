import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './TextArea.styles';

interface Props {
  text: string
}

const TextArea: React.FC<Props> = (props) => (
  <div className="TextAreaWrapper">
    {props.children}
  </div>
);

TextArea.propTypes = {
  // bla: PropTypes.string,
};

TextArea.defaultProps = {
  // bla: 'test',
};

export default TextArea;
