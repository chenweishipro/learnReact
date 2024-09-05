import React, { Component } from 'react'

import MyMenu from '../components/MyMenu/MyMenu'

export default class layout extends Component {
  render() {
    return (
      <div>
        {/* 顶部导航开始 */}
        <div>
         <MyMenu/>
          {/* <NavLink to={'/'}>首页</NavLink>
          <NavLink to={'/house'}>房屋</NavLink>
          <NavLink to={'/news'}>新闻</NavLink> */}
        </div>
        {/* 顶部导航结束 */}
        {/* 路由出口开始 */}
        {this.props.children}
        {/* 路由出口结束 */}
      </div>
    )
  }
}
