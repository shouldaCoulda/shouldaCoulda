import React, { Fragment } from 'react';
import { useAlert } from 'react-alert';
import styles from './PromptButton.module.css';

const PromptButton = () => {
  const alert = useAlert();
  return (
    <div>
      <h1 className={styles.test}>Jello</h1>
      <Fragment>
        <button
          className={styles.btn}
          onClick={() => {
            alert.error('Please Log In Or Sign Up To Continue');
          }}
        >
          Continue
        </button>
      </Fragment>
    </div>
  );
};

export default PromptButton;
