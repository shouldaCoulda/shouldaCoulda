import React from 'react';
import PromptButton from './PromptButton';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const animate = {
  timeout: 4000,
  position: positions.MIDDLE,
};

const SignInPrompt = () => {
  return (
    <Provider template={AlertTemplate} {...animate}>
      <PromptButton />
    </Provider>
  );
};

export default SignInPrompt;
