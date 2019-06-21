import base from './base'
/**
 * 邀请
 */
export default class admin extends base {
  /**
   * 分享链接
   */
  static share (opts) {
    return this.get(`/admin/share`, opts)
  }
  /**
   * 邀请码获取代理商详情
   */
  static brandinfo (opts) {
    return this.get(`/admin/brandinfo`, opts)
  }
}