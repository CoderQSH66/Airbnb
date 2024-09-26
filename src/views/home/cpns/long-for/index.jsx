import React, { memo } from "react"
import LongWrapper from "./style"
import SectionHeader from "@/component/section-header"

const LongFor = memo((props) => {
  const { info } = props
  return (
    <LongWrapper>
      <div className="title">
        <SectionHeader title={info?.title} subTtile={info?.subtitle || ""}></SectionHeader>
      </div>
      <div className="main">
        {info?.list?.map((m, i) => {
          return (
            <div className="item" key={i}>
              <div className="img">
                <img src={m.picture_url} alt="" />
              </div>
              <div className="desc">
                <div className="name">{m.city}</div>
                <div className="price">均价{m.price}</div>
              </div>
              <div className="cover"></div>
            </div>
          )
        })}
      </div>
    </LongWrapper>
  )
})

export default LongFor
