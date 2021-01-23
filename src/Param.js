import React, { useState } from 'react';

const Param = ({ pageName, param, onParamToggled }) => {
  const { randomize } = param;
  const [enabled, setEnabled] = useState(randomize);

  const handleCheck = (e) => {
    const newVal = !enabled;
    setEnabled(newVal);

    onParamToggled(pageName, param, newVal);
  };

  return (
    <li key={param.name}>
      <label className="checkLabel">
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={enabled}
          disabled={param.disabled}
        />{' '}
        {param.name}
        <span className="checkmark"></span>
      </label>
    </li>
  );
};

export default Param;
