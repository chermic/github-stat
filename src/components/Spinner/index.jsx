import React from 'react';
import * as style from './Spinner.module.css';

const Spinner = ({ show }) => (
  show ? (
    <div className={style.spinnerWrapper}>
      <div className={style.spinner} />
    </div>
  ) : null
);

export default Spinner;