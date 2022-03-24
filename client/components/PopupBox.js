import React from 'react';

const PopupBox = (props) => {
  return (
    <div className='popup'>
      <div className='box'>
        <span className='close' onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default PopupBox;
