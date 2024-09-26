import React, { memo, useEffect, useState } from "react"
import HeaderWrapper from "./style"
import HeaderLeft from "./cpns/header-left"
import HeaderCenter from "./cpns/header-center"
import HeaderRight from "./cpns/header-right"

const index = memo(() => {
  const [searchHeight, setSearchHeight] = useState(100)

  useEffect(() => {
    function setSh() {
      window.scrollY === 0 ? setSearchHeight(100) : setSearchHeight(0)
    }
    window.addEventListener("scroll", setSh)
    return () => {
      window.removeEventListener("scroll", setSh)
    }
  }, [])

  return (
    <HeaderWrapper $searchHeight={searchHeight}>
      <div className="content">
        <div className="left">
          <HeaderLeft></HeaderLeft>
        </div>
        <div className="center">
          <HeaderCenter searchHeight={searchHeight}></HeaderCenter>
        </div>
        <div className="right">
          <HeaderRight></HeaderRight>
        </div>
      </div>
      <div className="search"></div>
    </HeaderWrapper>
  )
})

export default index
