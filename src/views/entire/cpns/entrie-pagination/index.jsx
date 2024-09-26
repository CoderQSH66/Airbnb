import React, { memo } from "react"
import PaginationWrapper from "./style"
import { Pagination } from "antd"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchEctireDataAction } from "@/store/entire/actions"

const EntriePagination = memo(() => {
  const { page, total } = useSelector(
    (state) => ({
      page: state.entire.page,
      total: state.entire.total
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  const onChange = (page, pageSize) => {
    dispatch(fetchEctireDataAction(page, pageSize))
  }
  return (
    <PaginationWrapper>
      <Pagination
        align="center"
        onChange={onChange}
        total={total}
        defaultCurrent={page}
        defaultPageSize={20}
        showTotal={(total, reange) => {
          return `第${reange[0]}-${reange[1]}条-共${total}条`
        }}
      />
    </PaginationWrapper>
  )
})

export default EntriePagination
