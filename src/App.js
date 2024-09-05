



import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import House from './pages/House/House'
import News from './pages/News/News'
import Layout from './pages/Layout';







function App() {
  return (
    <div>
      <Router>
        {/* 配置路由规则 */}
        <Switch>
          <Layout path='/'>
            <Route exact path='/' component={Home} />
            <Route path='/house' component={House} />
            <Route path='/news' component={News} />

          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
