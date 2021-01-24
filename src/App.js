import React, { useEffect, useState } from 'react';
import defaultPages from './defaultPages';
import Footer from './Footer';
import './App.css';
import Complexity from './Complexity';
import Advanced from './Advanced';
import Device from './Device';

const App = () => {
  const [device, setDevice] = useState(null);
  const [complexity, setComplexity] = useState(0.666);
  const [pages, setPages] = useState(defaultPages);

  const handleDeviceChange = (newDevice) => {
    setDevice(newDevice);
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomizeParam = (absoluteMin, absoluteMax, currentValue) => {
    const min = currentValue - (currentValue - absoluteMin) * complexity;
    const max = currentValue + (absoluteMax - currentValue) * complexity;
    const value = getRandomIntInclusive(min, max);
    return value;
  };

  const handleRandomize = () => {
    const channel = 1;
    const newPages = pages.map((page) => {
      const { params, randomize } = page;
      if (!randomize) return page;
      const newParams = params.map((param) => {
        const { min = 0, max = 127, randomize, value = 64 } = param;
        if (!randomize) return param;
        const newValue = randomizeParam(min, max, value);
        return { ...param, value: newValue };
      });
      return { ...page, params: newParams };
    });

    setPages(newPages);

    if (!device) return;

    newPages.forEach((page) => {
      const { params, randomize } = page;
      if (!randomize) return;

      params.forEach((param) => {
        const { cc, value } = param;
        device.sendControlChange(cc, value, channel);
      });
    });
  };

  const handlePageToggled = (pageName, enabled) => {
    const foundPage = pages.find((p) => p.name === pageName);
    const newParams = foundPage.params.map((param) => ({
      ...param,
      disabled: !enabled,
    }));
    const newPage = { ...foundPage, params: newParams, randomize: enabled };
    const newPages = pages.map((page) =>
      page.name === pageName ? newPage : page
    );
    setPages(newPages);
  };

  const handleParamToggled = (pageName, param, enabled) => {
    const foundPage = pages.find((p) => p.name === pageName);
    const { params } = foundPage;
    const foundParam = params.find((p) => p.name === param.name);
    const newParam = { ...foundParam, randomize: enabled };
    const newParams = params.map((p) => (p.name === param.name ? newParam : p));
    const newPage = { ...foundPage, params: newParams };
    const newPages = pages.map((page) =>
      page.name === pageName ? newPage : page
    );
    setPages(newPages);
  };

  const handleComplexityChange = (e) => {
    setComplexity(parseFloat(e.target.value));
  };

  return (
    <div className="mainContainer">
      <h1>RYTM Randomizer</h1>

      <Device onDeviceChange={handleDeviceChange} />

      <div className="container">
        <button className="randomizeButton" onClick={handleRandomize}>
          Randomize
        </button>
      </div>

      <Complexity
        onComplexityChange={handleComplexityChange}
        complexity={complexity}
      />

      <Advanced
        pages={pages}
        onParamToggled={handleParamToggled}
        onPageToggled={handlePageToggled}
      />

      <Footer></Footer>
    </div>
  );
};

export default App;
