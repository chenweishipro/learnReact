



import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import House from './pages/House/House'
import News from './pages/News/News'
import Layout from './pages/Layout';
import ContextParent from './components/ContextParent';







function App() {
  return (
    <div>
      <ContextParent />
    </div>
  );
}

export default App;
