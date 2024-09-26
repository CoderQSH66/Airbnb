import { CHANGE_PAGE_TYPE, CHANGE_ROOMLIST_TYPE, CHANGE_TOTAL_TYPE, CHANGE_LOADING_TYPE } from "./action-types"

const initialValue = {
  page: 1, // 页码
  roomList: [], // 页面数据列表
  total: 0, // 总数
  loading: false
}

export default function entireReducer(state = initialValue, action) {
  const { type } = action
  switch (type) {
    case CHANGE_PAGE_TYPE:
      return { ...state, page: action.page }
    case CHANGE_ROOMLIST_TYPE:
      return { ...state, roomList: action.roomList }
    case CHANGE_TOTAL_TYPE:
      return { ...state, total: action.total }
    case CHANGE_LOADING_TYPE:
      return { ...state, loading: action.loading }
    default: {
      return state
    }
  }
}
