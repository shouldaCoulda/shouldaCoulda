import React from 'react';

const Popup = (props) => {
  return (
    <div className='popupBox'>
      <div className='box'>
        <span className='closeBox' onClick={props.handleClose}>
          X
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
