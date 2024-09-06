import React, { Component } from 'react'

import './MyMenu.css'

import logo from '../../assets/imgs/logo.jpg'


import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

import {Menu, Dropdown, Button} from 'antd';


import 


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        北京
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        上海
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        重庆
      </a>
    </Menu.Item>
  </Menu>
);



export default class MyMenu extends Component {

  // 页面加载，发送请求
  componentDidMount() {
   
      
   
  }
  render() {
    return (
      <div className='menu'>
        <div className='container'>
            {/* 左侧 */}
          <div className="left">
            <img src={logo} width={180} height={72}alt="" />
            </div>
          {/* 城市切换 */}
          <div>
         
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>北京</Button>
          </Dropdown>
          </div>
          
        
          
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
