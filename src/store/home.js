import {
  getDiscountData,
  getGoodPriceData,
  getHighscoreData,
  getHotrecommenddestData,
  getLongFortData,
  getPlusData
} from "@/api/module"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// 获取首页数据
export const getHomeDataActionAsync = createAsyncThunk("goodprice", async (info, { dispatch, getState }) => {
  const res = await Promise.all([
    getGoodPriceData(),
    getHighscoreData(),
    getDiscountData(),
    getHotrecommenddestData(),
    getLongFortData(),
    getPlusData()
  ])
  return {
    goodPrice: res[0],
    highScore: res[1],
    discountInfo: res[2],
    hotrecommenddest: res[3],
    longForData: res[4],
    plusData: res[5]
  }
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {},
    highScore: {},
    discountInfo: {},
    hotrecommenddest: {},
    longForData: {},
    plusData: {}
  },
  reducers: {
    getGoodPriceAction(state, { payload }) {
      state.goodPrice = payload
    }
  },
  extraReducers(builder) {
    builder.addCase(getHomeDataActionAsync.fulfilled, (state, { payload }) => {
      console.log(payload)
      state.goodPrice = payload.goodPrice
      state.highScore = payload.highScore
      state.discountInfo = payload.discountInfo
      state.hotrecommenddest = payload.hotrecommenddest
      state.longForData = payload.longForData
      state.plusData = payload.plusData
    })
  }
})

export const { getGoodPriceAction } = homeSlice.actions
export default homeSlice.reducer
