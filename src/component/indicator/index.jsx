import React, { forwardRef, memo, useEffect, useImperativeHandle, useRef } from "react"
import IndicatorWrapper from "./style"

const Indicator = memo(
  forwardRef(({ children, parentWidth, selectIndex }, ref) => {
    const indicatorRef = useRef()

    useImperativeHandle(ref, () => ({
      moveLeft(offset) {
        indicatorRef.current.style.translate = `-${offset}px`
      }
    }))
    useEffect(() => {
      // 1、获取当前选中indicator的width
      const currentWidth = indicatorRef.current.children[selectIndex].offsetWidth
      const currentLeft = indicatorRef.current.children[selectIndex].offsetLeft

      // 2、计算移动中间位置offset
      let offset = currentLeft + currentWidth * 0.5 - parentWidth * 0.5
      // console.log(selectIndex, currentWidth, currentLeft, offset, parentWidth)
      // 小于0不移动
      offset < 0 && (offset = 0)
      // 最多偏移量
      const maxOffset =
        [...indicatorRef.current.children].reduce((preValue, child) => {
          return preValue + child.offsetWidth
        }, 0) - parentWidth
      offset >= maxOffset && (offset = maxOffset)
      // 3、移动
      indicatorRef.current.style.translate = `${-offset}px`
    }, [selectIndex, parentWidth])
    return (
      <IndicatorWrapper>
        <div className="indicator" ref={indicatorRef}>
          {children}
        </div>
      </IndicatorWrapper>
    )
  })
)

export default Indicator
