import Indicator from "@/component/indicator"
import React, { memo, useEffect, useRef, useState } from "react"
import DemoWrapper from "./style"

const Demo = memo(() => {
  const IndicatorRef = useRef()
  const ListRef = useRef()
  const names = ["a", "b", "c", "d", "e", "f"]
  const [parentWidth, setParentWidth] = useState(0)
  const [selectIndex, setSelectIndex] = useState(0)

  const onMoveHandle = (isNext = true) => {
    let newSelectIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newSelectIndex < 0) newSelectIndex = names.length - 1
    if (newSelectIndex >= names.length) newSelectIndex = 0
    setSelectIndex(newSelectIndex)
  }

  useEffect(() => {
    setParentWidth(ListRef.current.offsetWidth)
  }, [])
  return (
    <DemoWrapper>
      <div className="list" ref={ListRef}>
        <Indicator ref={IndicatorRef} parentWidth={parentWidth} selectIndex={selectIndex}>
          {names.map((m) => {
            return (
              <div className="item" key={m}>
                {m}
              </div>
            )
          })}
        </Indicator>
      </div>
      <button onClick={() => onMoveHandle(false)}>left</button>
      <button onClick={() => onMoveHandle()}>right</button>
    </DemoWrapper>
  )
})

export default Demo
