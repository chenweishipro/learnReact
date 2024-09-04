// 替换src/index.js里的内容：
import React from 'react'

// 18

// import ReactDOM from 'react-dom/client'

// 引入antDesign
import 'antd/dist/antd.css';

// 17

import ReactDOM from 'react-dom'

import './index.css'

import App from './App'

import reportWebVitals from './reportWebVitals'

// 18

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(

// <React.StrictMode>

//           <App />

// </React.StrictMode> // );

// 17

ReactDOM.render(

  <React.StrictMode>

    <App />

  </React.StrictMode>,

  document.getElementById('root')

)

