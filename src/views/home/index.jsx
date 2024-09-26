import { getHomeDataActionAsync } from "@/store/home"
import React, { memo, useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import HomeWrapper from "./style"
import { Button } from "antd"
import HomeRooms from "./cpns/home-rooms"
import LongFor from "./cpns/long-for"
import { useLocation, useNavigate } from "react-router-dom"
import { setConfigAction } from "@/store/main"

const index = memo(() => {
  // 获取store中的数据
  const { goodPrice, highScore, discountInfo, hotrecommenddest, longForData, plusData } = useSelector(
    (state) => ({
      goodPrice: state.home.goodPrice,
      highScore: state.home.highScore,
      discountInfo: state.home.discountInfo,
      hotrecommenddest: state.home.hotrecommenddest,
      longForData: state.home.longForData,
      plusData: state.home.plusData
    }),
    shallowEqual
  )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    // 发送请求保存store中
    dispatch(getHomeDataActionAsync())
    // 修改首页header配置
    dispatch(setConfigAction({ fixed: true }))
  }, [dispatch])

  const handleMore = async () => {
    navigate("/entire")
  }
  // 监听路由变化
  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    })
  }, [location.pathname])

  return (
    <HomeWrapper>
      <div className="discountInfo">
        <HomeRooms roomdata={discountInfo} colnums={3}></HomeRooms>
      </div>
      <div className="hotrecommenddest">
        <HomeRooms roomdata={hotrecommenddest}></HomeRooms>
      </div>
      <div className="longForData">
        <LongFor info={longForData}></LongFor>
      </div>
      <div className="plusData">
        <LongFor info={plusData}></LongFor>
      </div>
      <div className="goodPrice">
        <HomeRooms roomdata={goodPrice}></HomeRooms>
      </div>
      <div className="highScore">
        <HomeRooms roomdata={highScore}></HomeRooms>
        <Button type="link" onClick={() => handleMore()}>
          查看更多
        </Button>
      </div>
    </HomeWrapper>
  )
})

export default index
