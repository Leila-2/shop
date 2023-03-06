import React from 'react';

export default function FilterItem({ checked, name, onChange }) {
  return (
    <label>
      {name}
      <input
        checked={checked}
        type="radio"
        name={name}
        value={name}
        onChange={onChange}
      />
    </label>
  );
}
