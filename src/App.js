import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import { Button } from 'antd';

import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}



function App() {
  return (
    <div className="App">
      <>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </>

      <br />

      <Calendar onPanelChange={onPanelChange} />
    </div>
  );
}

export default App;
