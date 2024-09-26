import React, { memo } from "react"
import FooterWrapper from "./style"
import data from "@/assets/data/footer"
const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className="main">
        {data.map((m, i) => {
          return (
            <div className="item" key={i}>
              <div className="title">{m.name}</div>
              {m.list.map((m, i) => {
                return (
                  <a href="." className="li" key={i}>
                    {m}
                  </a>
                )
              })}
            </div>
          )
        })}
      </div>
    </FooterWrapper>
  )
})

export default Footer
