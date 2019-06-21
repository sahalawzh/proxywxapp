import base from './base'
/**
 * 审核
 */
export default class store extends base {
  /**
   * 门店列表
   */
  static list (opts) {
    return this.get(`store/list`, opts)
  }
  /**
   * 门店列表
   */
  static update (opts) {
    return this.post(`store/update`, opts)
  }
}