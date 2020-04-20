import React from 'react';

export default function formInput(props) {
  const { handleChange, label, ...otherProps } = props;
  return (
    <div>
      <input onChange={handleChange} {...otherProps} />
      {label && <label>{label}</label>}
    </div>
  );
}
