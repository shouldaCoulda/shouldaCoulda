import React, { useState } from "react";
import PopupBox from "./PopupBox";
import { Link } from "react-router-dom";

function PopupButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input
        type="button"
        value="ADD"
        className="moreSubsButton hover"
        onClick={togglePopup}
      />
      <p></p>
      {isOpen && (
        <PopupBox
          content={
            <>
              <b>I Want To Add To</b>

              <div>
                <Link to="/expense">
                  <button>Other Expenses</button>
                </Link>
                <Link to="/selections">
                  <button>Subscriptions</button>
                </Link>
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
