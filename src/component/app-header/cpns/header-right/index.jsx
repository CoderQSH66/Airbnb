import React, { memo, useEffect, useState } from "react"
import RightWrapper from "./style"
import Global from "@/assets/svg/global"
import Avatar from "@/assets/svg/avatar"
import Menu from "@/assets/svg/menu"

const index = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    function listenClick() {
      setShowPanel(false)
    }
    window.addEventListener("click", listenClick, true)
    return () => {
      window.removeEventListener("click", listenClick, true)
    }
  }, [])
  const handlemenu = (e) => {
    setShowPanel(!showPanel)
  }

  return (
    <RightWrapper>
      <div className="operate">
        <div className="global">
          <Global></Global>
        </div>
        <div className="menu" id="menu-b" onClick={(e) => handlemenu(e)}>
          <Menu id="menu"></Menu>
          <Avatar id="avatar"></Avatar>
          {showPanel && (
            <ul className="menu-list">
              <li className="item">注册</li>
              <li className="item">登录</li>
              <li className="item">历史浏览记录</li>
              <li className="item split">帮助中心</li>
            </ul>
          )}
        </div>
      </div>
    </RightWrapper>
  )
})

export default index
