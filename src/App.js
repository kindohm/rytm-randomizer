import * as WebMidi from 'webmidi';
import React, { useEffect, useState } from 'react';
import defaultPages from './defaultPages';
import Footer from './Footer';
import './App.css';
import Complexity from './Complexity';
import Advanced from './Advanced';

const App = () => {
  const [devices, setDevices] = useState([]);
  const [deviceOptions, setDeviceOptions] = useState([]);
  const [device, setDevice] = useState(null);
  const [complexity, setComplexity] = useState(0.666);
  const [pages, setPages] = useState(defaultPages);

  useEffect(() => {
    WebMidi.enable((err) => {
      if (err) {
        console.log('WebMidi could not be enabled.', err);
        return;
      }
      const options = [{ value: '', name: '' }].concat(
        WebMidi.outputs.map((output) => ({
          value: output.name,
          name: output.name,
        }))
      );
      setDevices(WebMidi.outputs);
      setDeviceOptions(options);
    });
  });

  const handleDeviceChange = (e) => {
    const dev = devices.find((d) => d.name === e.target.value);
    setDevice(dev);
    console.log(dev);
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
      <div className="container">
        <p>Select your RYTM MIDI device:</p>
        <select onChange={handleDeviceChange} className="deviceSelect">
          {deviceOptions.map((device) => {
            return (
              <option key={device.name} value={device.value}>
                {device.name}
              </option>
            );
          })}
        </select>
      </div>

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
