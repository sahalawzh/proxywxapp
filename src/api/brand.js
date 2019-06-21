import base from './base'
/**
 * 审核
 */
export default class brand extends base {
  /**
   * 审核注册
   */
  static brandEdit (opts) {
    return this.post(`brand/edit`, opts)
  }
}