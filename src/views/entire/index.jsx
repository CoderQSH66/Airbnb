import React, { memo, useEffect } from "react"
import EntrieFilter from "./cpns/entrie-filter"
import EntrieMain from "./cpns/entrie-main"
import EntriePagination from "./cpns/entrie-pagination"
import { useDispatch } from "react-redux"
import { fetchEctireDataAction } from "@/store/entire/actions"
import { setConfigAction } from "@/store/main"

const Entire = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEctireDataAction())
    // 修改首页header配置
    dispatch(setConfigAction({ fixed: true }))
  }, [dispatch])

  return (
    <div>
      <EntrieFilter></EntrieFilter>
      <EntrieMain></EntrieMain>
      <EntriePagination></EntriePagination>
    </div>
  )
})

export default Entire
