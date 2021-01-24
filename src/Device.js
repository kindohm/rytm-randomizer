import React, { useEffect, useState } from 'react';
import './Device.css';
import * as WebMidi from 'webmidi';

const Device = ({ onDeviceChange }) => {
  const [devices, setDevices] = useState([]);
  const [deviceOptions, setDeviceOptions] = useState([]);

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
    const device = devices.find((d) => d.name === e.target.value);
    onDeviceChange(device);
  };

  return (
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
  );
};

export default Device;
