import base from './base'
/**
 * 订货
 */
export default class brandOrder extends base {
  /**
   * 审核通过
   */
  static approved (opts) {
    return this.post(`brand-order/approved?orderId=` + opts)
  }
  /**
   * 确认收货
   */
  static confirm (opts) {
    return this.post(`brand-order/confirm?orderId=` + opts)
  }
  /**
   * 订货详情
   */
  static detail (opts) {
    return this.get(`brand-order/detail`, opts)
  }
  /**
   * 出货列表
   */
  static list2 (opts) {
    return this.get(`brand-order/list2`, opts)
  }
  /**
   * 订货列表
   */
  static list (opts) {
    return this.get(`brand-order/list`, opts)
  }
  /**
   * 审核失败
   */
  static rejected (opts) {
    return this.post(`brand-order/rejected?orderId=` + opts)
  }
  /**
   * 发货
   */
  static ship (opts) {
    return this.post(`brand-order/ship`, opts)
  }
  /**
   * 提交订货单
   */
  static submit (opts) {
    return this.post(`brand-order/submit`, opts)
  }
  /**
   * 更新订货单
   */
  static update (opts) {
    return this.post(`brand-order/update`, opts)
  }
}