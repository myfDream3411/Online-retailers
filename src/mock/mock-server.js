/*
 使用mockjs模拟数据接口
 */
import Mock from 'mockjs'
import homeData from './homeData.json'  // 内部自动解析为了js对象
import category from './category.json'

// 生成policyDescList（服务策略）的接口
Mock.mock('/policyDescList', {code: 0, homeData:homeData.policyDescList})
// 生成kingKongModule（商品导航）的接口
Mock.mock('/kingKongModule',{code : 0,homeData:homeData.kingKongModule})
//生成personalShop（私人订制）的接口
Mock.mock('/personalShop',{code:0,homeData:homeData.personalShop})
Mock.mock('/categoryHotSellModule',{code:0,homeData:homeData.categoryHotSellModule})
Mock.mock('/popularItemList',{code:0,homeData:homeData.popularItemList})
Mock.mock('/flashSaleModule',{code:0,homeData:homeData.flashSaleModule})
Mock.mock('/newItemList',{code:0,homeData:homeData.newItemList})
Mock.mock('/categoryModule',{code:0,homeData:homeData.categoryModule})


Mock.mock('/categoryL1List',{code:0,category:category.categoryL1List})






// export default xxx
console.log('mockServer...')
