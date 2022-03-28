import React, { Fragment } from 'react';
import { useAlert } from 'react-alert';

const PromptButton = () => {
  const alert = useAlert();
  return (
    <Fragment>
      <button
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
