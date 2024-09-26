import React, { memo } from "react"
import SectionHeaderWrapper from "./style"

const SectionHeader = memo((props) => {
  const { title, subTtile = "" } = props
  return (
    <SectionHeaderWrapper>
      <div className="title">{title}</div>
      <div className="subtitle">{subTtile}</div>
    </SectionHeaderWrapper>
  )
})

export default SectionHeader
