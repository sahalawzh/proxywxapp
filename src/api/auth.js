import base from './base'
/**
 * 授权
 */
export default class auth extends base {
  /**
   * 绑定手机
   */
  static bindPhone (opts) {
    return this.post(`auth/bindPhone`, opts)
  }
  /**
   * 微信登陆
   */
  static wxByLogin (opts) {
    return this.post(`auth/login_by_weixin`, opts)
  }
}