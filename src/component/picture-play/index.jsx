import React, { memo, useEffect, useRef, useState } from "react"
import PicturePlayWrapper from "./style"
import { createPortal } from "react-dom"
import Indicator from "../indicator"
import classNames from "classnames"
import { CSSTransition, SwitchTransition } from "react-transition-group"

const PicturePlay = memo(({ showPic, pictureUrls, onClose }) => {
  useEffect(() => {
    // 禁止滚动
    showPic
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")
  }, [showPic])
  // 轮播
  const indicatorRef = useRef()
  const [parentWidth, setParentWidth] = useState(0)
  const [selectIndex, setSelectIndex] = useState(0)

  useEffect(() => {
    setParentWidth(indicatorRef?.current?.offsetWidth)
  }, [showPic])
  const handleToggle = (isLeft, e) => {
    // console.log(e)
    e.stopPropagation()
    // isLeft ? carouselRef.current.prev() : carouselRef.current.next()
    let nowIndex = isLeft ? selectIndex - 1 : selectIndex + 1
    if (nowIndex < 0) nowIndex = pictureUrls.length - 1
    if (nowIndex >= pictureUrls.length) nowIndex = 0
    setSelectIndex(nowIndex)
    // console.log(nowIndex)
  }
  // const beforeChange = (index, next) => {
  //   setSelectIndex(next)
  // }

  return createPortal(
    <PicturePlayWrapper hidden={!showPic}>
      <div className="paly-pic">
        <div className="swiper">
          {/* <Carousel ref={carouselRef} dots={false} beforeChange={beforeChange} effect="fade">
            {pictureUrls.map((m) => {
              return (
                <div className="item1" key={m}>
                  <img src={m} alt="" />
                </div>
              )
            })}
          </Carousel> */}
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={selectIndex}
              timeout={100}
              classNames="swiper"
              unmountOnExit
              appear
            >
              <div className="img">
                <img src={pictureUrls[selectIndex]} alt="" />
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="left arrow"
            onClick={(e) => handleToggle(true, e)}
          ></div>
          <div
            className="right arrow"
            onClick={(e) => handleToggle(false, e)}
          ></div>
        </div>
        <div className="indicator-list" ref={indicatorRef}>
          <Indicator selectIndex={selectIndex} parentWidth={parentWidth}>
            {pictureUrls.map((m, i) => {
              return (
                <div
                  className={classNames("item", { active: i === selectIndex })}
                  key={m}
                >
                  <div className="cover"></div>
                  <img src={m} alt="" />
                </div>
              )
            })}
          </Indicator>
        </div>
        <div className="close" onClick={() => onClose(true)}>
          关闭
        </div>
      </div>
    </PicturePlayWrapper>,
    document.body
  )
})

export default PicturePlay
