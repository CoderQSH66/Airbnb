import { getEntireData } from "@/api/module/entire"
import { CHANGE_PAGE_TYPE, CHANGE_ROOMLIST_TYPE, CHANGE_TOTAL_TYPE, CHANGE_LOADING_TYPE } from "./action-types"

export function changePageAction(page) {
  return {
    type: CHANGE_PAGE_TYPE,
    page: page
  }
}
export function changeRoomListAction(roomList) {
  return {
    type: CHANGE_ROOMLIST_TYPE,
    roomList: roomList
  }
}
export function changeTotalAction(total) {
  return {
    type: CHANGE_TOTAL_TYPE,
    total: total
  }
}

export function changeLoadingAction(loading) {
  return {
    type: CHANGE_LOADING_TYPE,
    loading: loading
  }
}

export function fetchEctireDataAction(page = 1, size = 20) {
  return async (dispatch, getState) => {
    dispatch(changeLoadingAction(true))
    const res = await getEntireData((page - 1) * size, size)
    const { totalCount, list } = res
    dispatch(changeRoomListAction(list))
    dispatch(changeTotalAction(totalCount))
    dispatch(changePageAction(page))
    dispatch(changeLoadingAction(false))
  }
}
