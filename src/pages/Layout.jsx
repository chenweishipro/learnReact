import React, { Component } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default class layout extends Component {
  render() {
    return (
      <div>
        {/* 顶部导航开始 */}
        <div>
          🧭 导航
        </div>
        {/* 顶部导航结束 */}
        {/* 路由出口开始 */}
        {this.props.children}
        {/* 路由出口结束 */}
      </div>
    )
  }
}
