import React, {useState} from 'react';

const Param = ({pageName, param, onParamToggled}) => {  
  const { randomize } = param;
  const [enabled, setEnabled] = useState(randomize);

  const handleCheck = e =>{
    const newVal = !enabled;
    setEnabled(newVal);

    onParamToggled(pageName, param, newVal);
  }

  return <li key={param.name}><input type="checkbox" onChange={handleCheck} checked={enabled}/> {param.name} {param.value}</li>
}

export default Param;