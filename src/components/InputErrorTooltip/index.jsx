import React from 'react';
import propTypes from 'prop-types';
import * as style from './InputErrorTooltip.module.css';

const InputErrorTooltip = ({ children }) => {
  return (
    <div className={style.tooltip}>
      <span>{children}</span>
    </div>
  );
};

InputErrorTooltip.propTypes = {
  text: propTypes.string,
}

export default InputErrorTooltip;