import React, { useState } from 'react';
import PopupBox from './PopupBox';

function PopupButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input type='button' value='ADD' onClick={togglePopup} />
      <p></p>
      {isOpen && (
        <PopupBox
          content={
            <>
              <b>I Want To Add To</b>

              <div>
                <button>Other Expenses</button>
                <button>Expenses</button>
                <button>Subscriptions</button>
                <button>Cigerettes</button>
                <button>Coffee</button>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default PopupButton;
