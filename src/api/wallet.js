import base from './base'
/**
 * 钱包
 */
export default class wallet extends base {
  /**
   * 钱包余额
   */
  static walletBalance (opts) {
    return this.get(`wallet/balance`, opts)
  }
  /**
   * 钱包余额
   */
  static walletList (opts) {
    return this.get(`wallet/list`, opts)
  }
  /**
   * 钱包提现
   */
  static withdraw (opts) {
    return this.post(`wallet/withdraw`, opts)
  }
}