import base from './base'
/**
 * 审核
 */
export default class stock extends base {
  /**
   * 库存列表
   */
  static list (opts) {
    return this.get(`stock/list`, opts)
  }
  /**
   * 盘点管理
   */
  static checkList (opts) {
    return this.get(`stock/checkList`, opts)
  }
  /**
   * 添加盘点
   */
  static addCheck (opts) {
    return this.post(`stock/addCheck`, opts)
  }
  /**
   * 仓库列表
   */
  static storehouseList (opts) {
    return this.get(`stock/storehouseList`, opts)
  }
  /**
   * 入库单
   */
  static inList (opts) {
    return this.get(`/stock/in-list`, opts)
  }
  /**
   * 出库单
   */
  static outList (opts) {
    return this.get(`/stock/out-list`, opts)
  }
}