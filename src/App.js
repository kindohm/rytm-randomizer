import * as WebMidi from 'webmidi';
import React, { useEffect, useState } from 'react';
import Pages from './Pages';
import defaultPages from './defaultPages';
import './App.css';

const App = () => {
  const [devices, setDevices] = useState([]);
  const [deviceOptions, setDeviceOptions] = useState([]);
  const [device, setDevice] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

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

  const handleRandomize = () => {
    const channel = 1;
    const newPages = pages.map((page) => {
      const { params, randomize } = page;
      if (!randomize) return page;
      const newParams = params.map((param) => {
        const { min = 0, max = 127, randomize } = param;
        if (!randomize) return param;
        const value = getRandomIntInclusive(min, max);
        return { ...param, value };
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
    console.log('pageName', pageName);
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

  const handleAdvancedToggle = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div>
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

      <div className="container">
        <button className="linkButton" onClick={handleAdvancedToggle}>
          {showAdvanced ? 'Hide advanced options' : 'Show advanced options'}
        </button>
      </div>

      {showAdvanced ? (
        <div className="container pagesContainer">
          <Pages
            pages={pages}
            onParamToggled={handleParamToggled}
            handlePageToggled={(pageName, enabled) =>
              handlePageToggled(pageName, enabled)
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default App;
