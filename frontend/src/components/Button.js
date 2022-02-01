import React from 'react';
import PropTypes from 'prop-types';

function Button({
  buttonName, handleClick, disabled, className, id, testId,
}) {
  return (
    <button
      id={id}
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={className}
      data-testid={testId}
    >
      <span>{ buttonName }</span>
    </button>
  );
}

const { func, string, bool } = PropTypes;

Button.propTypes = {
  handleClick: func.isRequired,
  disabled: bool,
  id: string,
  className: string.isRequired,
  buttonName: string.isRequired,
  testId: string.isRequired,
};

Button.defaultProps = {
  disabled: false,
  id: '',
};

export default Button;
