import React, { memo } from "react"
import WrapperScrollTabs from "./style"
import { Tabs } from "antd"

const ScrollTabs = memo((props) => {
  const { tabs, changetab } = props
  const items = tabs.map((m, i) => {
    return {
      key: i,
      label: m,
      closable: false
    }
  })
  const changeTab = (key) => {
    changetab(items[key].label)
  }
  return (
    <WrapperScrollTabs>
      <div className="tabs">
        <Tabs
          items={items}
          size="large"
          type="editable-card"
          hideAdd
          onChange={(key) => {
            changeTab(key)
          }}
        ></Tabs>
      </div>
    </WrapperScrollTabs>
  )
})

export default ScrollTabs
