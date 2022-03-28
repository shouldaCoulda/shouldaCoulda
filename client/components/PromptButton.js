import React, { Fragment } from 'react';
import { useAlert } from 'react-alert';
import style from './PromptButton.module.css';

const PromptButton = () => {
  const alert = useAlert();
  return (
    <Fragment>
      <button
        className={style.btn}
        onClick={() => {
          alert.error('Please Log In Or Sign Up To Continue');
        }}
      >
        Continue
      </button>
    </Fragment>
  );
};

export default PromptButton;
