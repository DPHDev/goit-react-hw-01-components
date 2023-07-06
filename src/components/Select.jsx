import React from 'react';

export const SelectTask = ({ options, onSelection }) => {
  const handleButtonClick = (option) => {
    onSelection(option);
  };

  return (
    <div className='menu'>
      {options.map((option) => (
        <button className='menu_btn' key={option.key} onClick={() => handleButtonClick(option)}>
          {option.label}
        </button>
      ))}
    </div>
  );
};