import React, { memo, useEffect, useRef, useState } from "react"
import RoomItemWrapper from "./style"
import { Carousel } from "antd"
import Left from "@/assets/svg/left"
import Right from "@/assets/svg/right"
import Indicator from "../indicator"
import classNames from "classnames"

const RoomItem = memo((props) => {
  const { roomData } = props
  const carouselRef = useRef()
  const indicatorRef = useRef()
  const [parentWidth, setParentWidth] = useState(0)
  const [selectIndex, setSelectIndex] = useState(0)

  useEffect(() => {
    setParentWidth(indicatorRef?.current?.offsetWidth)
  }, [])
  const handleToggle = (isLeft, e) => {
    // console.log(e)
    e.stopPropagation()
    isLeft ? carouselRef.current.prev() : carouselRef.current.next()
  }
  const beforeChange = (index, next) => {
    setSelectIndex(next)
  }
  return (
    <RoomItemWrapper $verifycolor={roomData?.verify_info?.text_color}>
      {roomData?.picture_urls ? (
        <Carousel ref={carouselRef} className="swiper" dots={false} beforeChange={beforeChange}>
          {roomData?.picture_urls.map((m) => {
            return (
              <div className="item1" key={m}>
                <img src={m} alt="" />
              </div>
            )
          })}
        </Carousel>
      ) : (
        <div className="img">
          <img src={roomData.picture_url} alt="" />
        </div>
      )}
      <div className="desc">
        <div className="msg">
          <span>{roomData.verify_info.messages[0]}</span>
          <span>{roomData.verify_info.messages[1]}</span>
        </div>
        <div className="name">{roomData.name}</div>
        <div className="price">{roomData.price_format}/晚</div>
      </div>
      {roomData?.picture_urls && (
        <div className="arrows">
          <div className="left arrow" onClick={(e) => handleToggle(true, e)}>
            <Left></Left>
          </div>
          <div className="right arrow" onClick={(e) => handleToggle(false, e)}>
            <Right></Right>
          </div>
        </div>
      )}
      {roomData?.picture_urls && (
        <div className="indicator-list" ref={indicatorRef}>
          <Indicator selectIndex={selectIndex} parentWidth={parentWidth}>
            {roomData?.picture_urls.map((m, i) => {
              return (
                <div className="item" key={m}>
                  <div className={classNames("dot", { active: i === selectIndex })}></div>
                </div>
              )
            })}
          </Indicator>
        </div>
      )}
    </RoomItemWrapper>
  )
})

export default RoomItem
