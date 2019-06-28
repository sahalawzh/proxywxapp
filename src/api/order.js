import base from './base'
/**
 * 审核
 */
export default class order extends base {
  /**
   * 核销信息
   */
  static detailBySn (opts) {
    return this.get(`order/detail_by_sn`, opts)
  }
  /**
   * 提交核销
   */
  static verif (opts) {
    return this.post(`order/verif?`+ opts)
  }
  /**
   * 销售列表
   */
  static listBrand (opts) {
    return this.get(`order/list-brand`, opts)
  }
  /**
   * 销售详情
   */
  static detail (opts) {
    return this.get(`order/detail`, opts)
  }
  /**
   * 核销列表
   */
  static verifList (opts) {
    return this.get(`order/verifList`, opts)
  }
}