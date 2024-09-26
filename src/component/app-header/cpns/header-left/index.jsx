import React, { memo } from "react"
import LeftWrapper from "./style"
import Logo from "@/assets/svg/logo"
import { useNavigate } from "react-router-dom"

const index = memo(() => {
  // const navigate = useNavigate()

  // const handleBack = () => {
  //   navigate("/home")
  // }
  return (
    <LeftWrapper>
      <div className="logo">
        <Logo></Logo>
      </div>
    </LeftWrapper>
  )
})

export default index
