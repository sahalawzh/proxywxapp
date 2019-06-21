import base from './base'
/**
 * 钱包
 */
export default class wallet extends base {
  /**
   * 钱包余额
   */
  static walletBalance (opts) {
    return this.post(`wallet/balance`, opts)
  }
  /**
   * 钱包充值
   */
  static walletRechargePrepay (opts) {
    return this.post(`wallet/rechargePrepay`, opts)
  }
}