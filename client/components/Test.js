import React, { useState } from 'react';
import Popup from './Popup';

const Test = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input type='button' value='Click To Add' onClick={togglePopup} />
      {isOpen && <Popup />}
    </div>
  );
};

export default Test;
