import React from 'react';
import { TailwindProvider } from 'tailwind-rn/dist';
import utilities from '../../tailwind.json';
import { Component } from './Component';

const App = () => (
  <TailwindProvider utilities={utilities}>
    <Component />
  </TailwindProvider>
);

export default App;
