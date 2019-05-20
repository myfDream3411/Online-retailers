/*
 包含n个用于直接更新状态数据的方法的对象
 */
import {RECIVE_POLICYDESCLIST,RECIVE_KINGKONGMODULE} from './mutation-type'
export default {
  [RECIVE_POLICYDESCLIST] (state,{policyDescList}){
    state.policyDescList = policyDescList
  },
  [RECIVE_KINGKONGMODULE] (state,{kingKongModule}){
    state.kingKongModule = kingKongModule
  }
}
