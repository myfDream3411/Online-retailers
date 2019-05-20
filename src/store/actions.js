/*
 包含n个用于间接更新状态数据的方法的对象
 */
import {RECIVE_POLICYDESCLIST,RECIVE_KINGKONGMODULE} from './mutation-type'
import {reqPolicyDescList,reqKingKongModule} from '../api'
export default {
  async getPolicyDescList ({commit}){
    const result = await reqPolicyDescList()
    if(result.code===0){
      const policyDescList = result.homeData
      commit(RECIVE_POLICYDESCLIST,{policyDescList})
    }
  },
  async getKingKongModule ({commit}){
    const result = await reqKingKongModule()
    if(result.code===0){
      const kingKongModule = result.homeData
      commit(RECIVE_KINGKONGMODULE,{kingKongModule})
    }
  },
}
