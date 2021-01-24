import React, { useState } from 'react';
import defaultPages from './defaultPages';
import Advanced from './Advanced';
import Complexity from './Complexity';
import Device from './Device';
import Footer from './Footer';
import NotSupported from './NotSupported';
import Randomize from './Randomize';
import './App.css';

const getInitialChannels = (pages) => {
  return [...Array(12)].map((x, i) => {
    return {
      number: i + 1,
      pages,
    };
  });
};

const App = () => {
  const [device, setDevice] = useState(null);
  const [complexity, setComplexity] = useState(0.666);
  const [pages, setPages] = useState(defaultPages);
  const [notSupported, setNotSupported] = useState(false);
  const [channels, setChannels] = useState(getInitialChannels(defaultPages));

  const handleDeviceChange = (newDevice) => {
    setDevice(newDevice);
  };

  const getRandomIntInclusive = (min, max) => {
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
  };

  const randomizeParam = (absoluteMin, absoluteMax, currentValue) => {
    const min = currentValue - (currentValue - absoluteMin) * complexity;
    const max = currentValue + (absoluteMax - currentValue) * complexity;
    const value = getRandomIntInclusive(min, max);
    return value;
  };

  const handleRandomize = () => {
    const newChannels = channels.map((channel) => {
      const channelPages = channel.pages;
      const newPages = channelPages.map((channelPage) => {
        const pageConfig = pages.find((p) => p.name === channelPage.name);
        const randomizePage = pageConfig.randomize;
        if (!randomizePage) return channelPage;
        const channelPageParams = channelPage.params;
        const pageConfigParams = pageConfig.params;

        const newChannelParams = channelPageParams.map((param) => {
          const { min = 0, max = 127, value = 64 } = param;
          const paramConfig = pageConfigParams.find(
            (p) => p.name === param.name
          );
          const shouldRandomizeParam = paramConfig.randomize;
          if (!shouldRandomizeParam) return param;
          const newValue = randomizeParam(min, max, value);
          return { ...param, value: newValue };
        });
        return { ...channelPage, params: newChannelParams };
      });

      return { ...channel, pages: newPages };
    });

    // const newPages = pages.map((page) => {
    //   const { params, randomize } = page;
    //   if (!randomize) return page;
    //   const newParams = params.map((param) => {
    //     const { min = 0, max = 127, randomize, value = 64 } = param;
    //     if (!randomize) return param;
    //     const newValue = randomizeParam(min, max, value);
    //     return { ...param, value: newValue };
    //   });
    //   return { ...page, params: newParams };
    // });

    // setPages(newPages);
    setChannels(newChannels);

    if (!device) return;

    newChannels.forEach((channel) => {
      const channelPages = channel.pages;

      channelPages.forEach((channelPage) => {
        const { params } = channelPage;
        const pageConfig = pages.find((p) => p.name === channelPage.name);
        const randomizePage = pageConfig.randomize;
        if (!randomizePage) return;

        params.forEach((param) => {
          const { cc, value } = param;
          device.sendControlChange(cc, value, channel.number);
        });
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

  const handleOnNotSupported = () => {
    setNotSupported(true);
  };

  return (
    <div className="mainContainer">
      <h1>RYTM Randomizer</h1>

      {notSupported ? (
        <NotSupported />
      ) : (
        <div>
          <Device
            onDeviceChange={handleDeviceChange}
            onNotSupported={handleOnNotSupported}
          />

          <Randomize onRandomize={handleRandomize} disabled={!device} />

          <Complexity
            onComplexityChange={handleComplexityChange}
            complexity={complexity}
          />

          <Advanced
            pages={pages}
            onParamToggled={handleParamToggled}
            onPageToggled={handlePageToggled}
          />
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default App;
