/*
 包含n个用于间接更新状态数据的方法的对象
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
import {
  reqPolicyDescList,
  reqKingKongModule,
  reqPersonalShop,
  reqCategoryHotSellModule,
  reqPopularItemList,
  reqFlashSaleModule,
  reqNewItemList,
  reqCategoryModule,
  reqCategoryL1List,
  reqSearch
} from '../api'
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
  async getPersonalShop ({commit}){
    const result = await reqPersonalShop()
    if(result.code===0){
      const personalShop = result.homeData
      commit(RECIVE_PERSONALSHOP,{personalShop})
    }
  },
  async getCategoryHotSellModule ({commit}){
    const result = await reqCategoryHotSellModule()
    if(result.code===0){
      const categoryHotSellModule = result.homeData
      commit(RECIVE_CATEGORYHOTSELLMODULE,{categoryHotSellModule})
    }
  },
  async getPopularItemList ({commit}){
    const result = await reqPopularItemList()
    if(result.code===0){
      const popularItemList = result.homeData
      commit(RECIVE_POPULARITEMLIST,{popularItemList})
    }
  },
  async getFlashSaleModule ({commit}){
    const result = await reqFlashSaleModule()
    if(result.code===0){
      const flashSaleModule = result.homeData
      commit(RECIVE_FLASHSALEMODULE,{flashSaleModule})
    }
  },
  async getNewItemList ({commit}){
    const result = await reqNewItemList()
    if(result.code===0){
      const newItemList = result.homeData
      commit(RECIVE_NEWITEMLIST,{newItemList})
    }
  },
  async getCategoryModule ({commit}){
    const result = await reqCategoryModule()
    if(result.code===0){
      const categoryModule = result.homeData
      commit(RECIVE_CATEGORYMODULE,{categoryModule})
    }
  },
  async getCategoryL1List ({commit}){
    const result = await reqCategoryL1List()
    if(result.code===0){
      const categoryL1List = result.category
      commit(RECIVE_CATEGORYL1LIST,{categoryL1List})
    }
  },
  async getSearch ({commit},data){
    const result = await reqSearch(data)
    if(result.code==='200'){
      const search = result.data
      commit(RECIVE_SEARCH,{search})
    }
  },
}
