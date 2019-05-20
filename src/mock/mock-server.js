/*
 使用mockjs模拟数据接口
 */
import Mock from 'mockjs'
import homeData from './homeData.json'  // 内部自动解析为了js对象

// 生成policyDescList（服务策略）的接口
Mock.mock('/policyDescList', {code: 0, homeData:homeData.policyDescList})
// 生成kingKongModule（商品导航）的接口
Mock.mock('/kingKongModule',{code : 0,homeData:homeData.kingKongModule})

// export default xxx
console.log('mockServer...')
