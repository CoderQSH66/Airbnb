import React, { memo, useEffect, useRef, useState } from "react"
import WrapperScrollView from "./style"
import Left from "@/assets/svg/left"
import Right from "@/assets/svg/right"
import classNames from "classnames"

const ScrollView = memo((props) => {
  const { tabs, changetab } = props
  const [showRight, setShowRight] = useState(false)
  const [showLeft, setShowLeft] = useState(false)
  const [itemWidth, setItemWidth] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)
  const [index, setIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const viewRef = useRef()

  useEffect(() => {
    setShowRight(!!(viewRef.current?.scrollWidth > viewRef.current?.offsetWidth))
    setItemWidth(viewRef.current?.children[0].offsetWidth)
    setScrollWidth(viewRef.current?.scrollWidth)
  }, [])

  useEffect(() => {
    function listenRs() {
      setShowRight(!!(viewRef.current?.scrollWidth > viewRef.current?.offsetWidth))
      setItemWidth(viewRef.current?.children[0].offsetWidth)
      setScrollWidth(viewRef.current?.scrollWidth)
    }
    window.addEventListener("resize", listenRs)
    return () => {
      window.removeEventListener("resize", listenRs)
    }
  })

  // 右侧点击
  const handleRight = () => {
    // 开启左侧按钮
    setShowLeft(true)
    setIndex(index + 1)
    viewRef.current.style.translate = `-${itemWidth * (index + 1)}px`
    // 移动距离
    const translateX = Number(getComputedStyle(viewRef.current).translate.replace("px", ""))

    // 判断移动距离+固定宽度是否大于可滚动距离
    if (scrollWidth + translateX - itemWidth <= viewRef.current.offsetWidth) {
      setShowRight(false)
    }
  }

  // 左侧点击
  const handleLeft = () => {
    setShowRight(true)
    viewRef.current.style.translate = `-${itemWidth * (index - 1)}px`
    console.log(itemWidth)
    setIndex(index - 1)
    // 移动距离
    const translateX = Number(getComputedStyle(viewRef.current).translate.replace("px", ""))
    if (translateX * -1 === itemWidth) {
      setShowLeft(false)
      return
    }
  }

  const handleClickTab = (m, i) => {
    setCurrentIndex(i)
    changetab(m)
  }
  return (
    <WrapperScrollView>
      {
        <div className="scroll-view">
          {tabs && (
            <ul className="tabs" ref={viewRef}>
              {tabs.map((m, i) => {
                return (
                  <li
                    className={classNames("item", { active: currentIndex === i })}
                    key={i}
                    onClick={() => handleClickTab(m, i)}
                  >
                    {m}
                  </li>
                )
              })}
            </ul>
          )}
          {showLeft && (
            <button className="left arrow">
              <span className="icon" onClick={() => handleLeft()}>
                <Left></Left>
              </span>
            </button>
          )}
          {showRight && (
            <button className="right arrow">
              <span className="icon" onClick={() => handleRight()}>
                <Right></Right>
              </span>
            </button>
          )}
        </div>
      }
    </WrapperScrollView>
  )
})

export default ScrollView
