import React, { useState } from 'react';
import Param from './Param';
import './Page.css';

const Page = ({ page, onPageToggled, onParamToggled }) => {
  const { name, randomize } = page;
  const [enabled, setEnabled] = useState(randomize);

  const handleCheck = (e) => {
    const newVal = !enabled;
    setEnabled(newVal);
    onPageToggled(name, newVal);
  };

  return (
    <div className="page">
      <h3>{name}</h3>
      <p>
        <label className="checkLabel"><input type="checkbox" onChange={handleCheck} checked={enabled}></input>{' '}
        Randomize
        <span className="checkmark"></span>
        </label>
      </p>
      <ul className="paramList">
        {page.params.map((param) => {
          return <Param key={param.name} pageName={page.name} param={param} onParamToggled={onParamToggled} />;
        })}
      </ul>
    </div>
  );
};

export default Page;
