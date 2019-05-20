/*
 包含h个接口请求函数的模块
 每个函数返回promise
 */
import ajax from './ajax'
export const reqPolicyDescList = ()=> ajax('/policyDescList')
export const reqKingKongModule = ()=> ajax('/kingKongModule')
