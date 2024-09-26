import React, { memo, useEffect } from "react"
import { useLocation } from "react-router-dom"
import DetailWrapper from "./style"
import DetailPicture from "./cpns/detail-pic"
import { useDispatch } from "react-redux"
import { fetchEctireDataAction } from "@/store/entire/actions"
import { setConfigAction } from "@/store/main"

const Detail = memo(() => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEctireDataAction())
    // 修改首页header配置
    dispatch(setConfigAction({ fixed: false }))
  }, [dispatch])
  const {
    state: { picture_urls }
  } = useLocation()

  return (
    <DetailWrapper>
      <div className="picture">
        <DetailPicture pictureUrls={picture_urls}></DetailPicture>
      </div>
    </DetailWrapper>
  )
})

export default Detail
