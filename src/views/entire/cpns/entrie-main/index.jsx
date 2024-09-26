import React, { memo } from "react"
import MainWrapper from "./style"
import { shallowEqual, useSelector } from "react-redux"
import RoomItem from "@/component/room-item"
import { Spin } from "antd"
import { useNavigate } from "react-router-dom"

const EntrieMain = memo(() => {
  const { roomList, loading } = useSelector(
    (state) => ({
      roomList: state.entire.roomList,
      loading: state.entire.loading
    }),
    shallowEqual
  )
  const navigate = useNavigate()
  const onDetail = (data) => {
    navigate("/detail", {
      state: data
    })
  }
  return (
    <Spin spinning={loading} indicator={<></>}>
      <MainWrapper>
        {roomList?.map((m) => {
          return (
            <div className="item" onClick={() => onDetail(m)} key={m._id}>
              <RoomItem roomData={m}></RoomItem>
            </div>
          )
        })}
      </MainWrapper>
    </Spin>
  )
})

export default EntrieMain
