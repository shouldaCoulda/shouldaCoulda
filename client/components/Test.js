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
      {isOpen && (
        <Popup
          content={
            <>
              <p>Add To </p>
              <button>Subscriptions</button>
              <button>Expenses</button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default Test;
