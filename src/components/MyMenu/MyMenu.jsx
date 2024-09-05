import React, { Component } from 'react'

import './MyMenu.css'

import logo from '../../assets/imgs/logo.jpg'


import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default class MyMenu extends Component {
  render() {
    return (
      <div className='menu'>
        <div className='container'>
            {/* 左侧 */}
          <div className="left">
            <img src={logo} width={180} height={72}alt="" />
            </div>
          {/* 城市切换 */}
          <span>北京</span>
          
          <div className="right">
            {/* 右侧 */}
            <NavLink exact to={'/'}>首页</NavLink>
            <NavLink to={'/house'}>法拍房源</NavLink>
            <NavLink to={'/news'}>法拍咨询</NavLink>
            <NavLink to={'/success'}>成功案例</NavLink>
            <NavLink to={'/join'}>登陆注册</NavLink>
          
          </div>
        </div>
      </div>
    )
  }
}
