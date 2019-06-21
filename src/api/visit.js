import base from './base'
/**
 * 拜访
 */
export default class visit extends base {
  /**
   * 访问代理商信息上传
   */
  static addVisit (opts) {
    return this.post(`visit/addVisit`, opts)
  }
  /**
   * 待访问的代理商列表
   */
  static agentList (opts) {
    return this.get(`visit/agentList`, opts)
  }
  /**
   * 访问记录
   */
  static visitList (opts) {
    return this.get(`visit/visitList`, opts)
  }
}