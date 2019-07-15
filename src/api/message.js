import base from './base'
/**
 * 消息中心
 */
export default class message extends base {
  /**
   * 列表
   */
  static list (opts) {
    return this.get(`message/list`, opts)
  }
  /**
   * 去掉已读的接口
   */
  static readMessage (opts) {
    return this.post(`message/readMessage`, opts)
  }
  /**
   * 申请门店
   */
  static apply (opts) {
    return this.get(`message/apply`, opts)
  }
}