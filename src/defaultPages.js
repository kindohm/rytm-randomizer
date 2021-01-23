const defaultPages = [
  {
    name: 'Synth',
    randomize: true,
    params: [
      { name: 'Level', cc: 16, randomize: true },
      { name: 'Synth Param 2', cc: 17, randomize: true },
      { name: 'Synth Param 3', cc: 18, randomize: true },
      { name: 'Synth Param 4', cc: 19, randomize: true },
      { name: 'Synth Param 5', cc: 20, randomize: true },
      { name: 'Synth Param 6', cc: 21, randomize: true },
      { name: 'Synth Param 7', cc: 22, randomize: true },
      { name: 'Synth Param 8', cc: 23, randomize: true },
    ],
  },
  {
    name: 'Filter',
    randomize: true,
    params: [
      { name: 'Attack Time', cc: 70, randomize: true },
      { name: 'Decay Time', cc: 71, randomize: true },
      { name: 'Sustain Level', cc: 72, randomize: true },
      { name: 'Release Time', cc: 73, randomize: true },
      { name: 'Frequency', cc: 74, randomize: true },
      { name: 'Resonance', cc: 75, randomize: true },
      { name: 'Mode', cc: 76, min: 0, max: 6, randomize: true },
      { name: 'Env Depth', cc: 77, randomize: true },
    ],
  },

  {
    name: 'Amp',
    randomize: true,
    params: [
      { name: 'Attack Time', cc: 78, min: 0, max: 30, randomize: true },
      { name: 'Hold Time', cc: 79, randomize: true },
      { name: 'Decay Time', cc: 80, randomize: true },
      { name: 'Overdrive', cc: 81, randomize: true },
      { name: 'Delay Send', cc: 82, min: 0, max: 30, randomize: true },
      { name: 'Reverb Send', cc: 83, min: 0, max: 30, randomize: true },
      { name: 'Pan', cc: 10, min: 0, max: 127, randomize: false, value: 64 },
    ],
  },
  {
    name: 'LFO',
    randomize: true,
    params: [
      { name: 'Speed', cc: 102, randomize: true },
      { name: 'Mult', cc: 103, min: 0, max: 23, randomize: true },
      { name: 'Fade', cc: 104, randomize: true },
      { name: 'Destination', cc: 105, min: 0, max: 31, randomize: true },
      { name: 'Waveform', cc: 106, min: 0, max: 6, randomize: true },
      { name: 'Start Phase', cc: 107, randomize: true },
      { name: 'Trig Mode', cc: 108, min: 0, max: 4, randomize: true },
      { name: 'Depth', cc: 109, randomize: true },
    ],
  },
  {
    name: 'Sample',
    randomize: true,
    params: [
      { name: 'Tune', cc: 24, randomize: true },
      { name: 'Fine Tune', cc: 25, randomize: true },
      { name: 'Bit Reduction', cc: 26, randomize: true },
      { name: 'Slot', cc: 27, randomize: true },
      { name: 'Start', cc: 28, randomize: true },
      { name: 'End', cc: 29, randomize: true },
      { name: 'Loop', cc: 30, randomize: true },
      { name: 'Level', cc: 31, min: 0, max: 100, randomize: true },
    ],
  },
];

export default defaultPages;
