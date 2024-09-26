import { configureStore } from "@reduxjs/toolkit"
import homeReducer from "./home"
import entireReducer from "./entire/reducer"
import mainReducer from "./main"

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    main: mainReducer
  }
})

export default store
