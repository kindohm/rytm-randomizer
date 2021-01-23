import React, { useState } from 'react';
import Param from './Param';

const Page = ({ page, onPageToggled, onParamToggled }) => {
  const { name, randomize } = page;
  const [enabled, setEnabled] = useState(randomize);

  const handleCheck = (e) => {
    const newVal = !enabled;
    setEnabled(newVal);
    onPageToggled(name, newVal);
  };

  return (
    <div style={{ border: 'solid 1px black', marginBottom: '10px' }}>
      <h3>{name}</h3>
      <p>
        <input type="checkbox" onChange={handleCheck} checked={enabled}></input>{' '}
        Randomize
      </p>
      <ul>
        {page.params.map((param) => {
          return <Param key={param.name} pageName={page.name} param={param} onParamToggled={onParamToggled} />;
        })}
      </ul>
    </div>
  );
};

export default Page;
