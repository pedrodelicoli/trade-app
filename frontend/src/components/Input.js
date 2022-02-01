import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    labelText,
    inputType,
    handleChange,
    placeholder,
    className,
    id,
    testId,
  } = props;
  return (
    <label htmlFor={id} className={className}>
      {labelText}
      <input
        id={id}
        type={inputType}
        onChange={handleChange}
        placeholder={placeholder}
        className={className}
        data-testid={testId}
      />
    </label>
  );
};

const { string, func } = PropTypes;

Input.propTypes = {
  labelText: string.isRequired,
  inputType: string.isRequired,
  handleChange: func.isRequired,
  placeholder: string,
  className: string,
  id: string,
  testId: string.isRequired,
};

export default Input;