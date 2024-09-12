import React, { Component } from 'react'

import './MyMenu.css'

import logo from '../../assets/imgs/logo.jpg'


import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

import {Menu, Dropdown, Button} from 'antd';

import api from './../../api/index'







export default class MyMenu extends Component {

state = {
  cities:["北京", "上海", "深圳"] // 城市下拉列表
}


  // 页面加载，发送请求
  componentDidMount() {
     api.getCities()
     .then(res=>{
      this.setState({
        cities: res
      })
     })
     
      
   
  }
  render() {

    const menu = (
      <Menu>
        {
          console.log(this.state.cities)
          this.state.cities.map((item) => {
            return (
              <Menu.Item>
                <a target='_blank' rel='noopener noreferrer' href='##'>
                  {item}
                </a>
              </Menu.Item>
            )
          })
        }
      </Menu>
    );


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
