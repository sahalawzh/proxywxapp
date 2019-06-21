import base from './base'
/**
 * 商品
 */
export default class wallet extends base {
  /**
   * 商品列表添加订货
   */
  static goodsList (opts) {
    return this.get(`goods/list-by-order`, opts)
  }
  /**
   * 商品类别
   */
  static listByOrder (opts) {
    return this.get(`category/list-by-order`, opts)
  }
}