import base from './base'
/**
 * 业绩报表
 */
export default class report extends base {
  /**
   * 业绩报表
   */
  static results (opts) {
    return this.get(`report/results`, opts)
  }
  /**
   * 代理商详情
   */
  static brandinfo (opts) {
    return this.get(`report/brandinfo`, opts)
  }
}