// 封装所有请求方法
import axios from "axios";
import base from "./base";


const api = {
  // 获取城市列表
  getCities() {
    return axios.get(base.host + base.city)
  }
}



export default api