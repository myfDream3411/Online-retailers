/*
 包含h个接口请求函数的模块
 每个函数返回promise
 */
import ajax from './ajax'
export const reqPolicyDescList = ()=> ajax('/policyDescList')
export const reqKingKongModule = ()=> ajax('/kingKongModule')
export const reqPersonalShop = ()=> ajax('/personalShop')
export const reqCategoryHotSellModule = ()=> ajax('/categoryHotSellModule')
export const reqPopularItemList = ()=> ajax('/popularItemList')
export const reqFlashSaleModule = ()=> ajax('/flashSaleModule')
export const reqNewItemList = ()=> ajax('/newItemList')
export const reqCategoryModule = ()=> ajax('/categoryModule')
export const reqCategoryL1List = ()=> ajax('/categoryL1List')

export const reqSearch = (keywordPrefix)=> ajax('/api/xhr/search/searchAutoComplete.json',{keywordPrefix})
