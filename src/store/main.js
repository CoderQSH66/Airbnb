import { createSlice } from "@reduxjs/toolkit"

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      // 固定定位
      fixed: true
    }
  },
  reducers: {
    setConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { setConfigAction } = mainSlice.actions
export default mainSlice.reducer
