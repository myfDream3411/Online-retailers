/*
 包含n个用于直接更新状态数据的方法的对象
 */
import {
  RECIVE_POLICYDESCLIST,
  RECIVE_KINGKONGMODULE,
  RECIVE_PERSONALSHOP,
  RECIVE_CATEGORYHOTSELLMODULE,
  RECIVE_POPULARITEMLIST,
  RECIVE_FLASHSALEMODULE,
  RECIVE_NEWITEMLIST,
  RECIVE_CATEGORYMODULE,
  RECIVE_CATEGORYL1LIST,
  RECIVE_SEARCH
} from './mutation-type'
export default {
  [RECIVE_POLICYDESCLIST] (state,{policyDescList}){
    state.policyDescList = policyDescList
  },
  [RECIVE_KINGKONGMODULE] (state,{kingKongModule}){
    state.kingKongModule = kingKongModule
  },
  [RECIVE_PERSONALSHOP] (state,{personalShop}){
    state.personalShop = personalShop
  },
  [RECIVE_CATEGORYHOTSELLMODULE] (state,{categoryHotSellModule}){
    state.categoryHotSellModule = categoryHotSellModule
  },
  [RECIVE_POPULARITEMLIST] (state,{popularItemList}){
    state.popularItemList = popularItemList
  },
  [RECIVE_FLASHSALEMODULE] (state,{flashSaleModule}){
    state.flashSaleModule = flashSaleModule
  },
  [RECIVE_NEWITEMLIST] (state,{newItemList}){
    state.newItemList = newItemList
  },
  [RECIVE_CATEGORYMODULE] (state,{categoryModule}){
    state.categoryModule = categoryModule
  },
  [RECIVE_CATEGORYL1LIST] (state,{categoryL1List}){
    state.categoryL1List = categoryL1List
  },
  [RECIVE_SEARCH] (state,{search}){
    state.search = search
  },
}
