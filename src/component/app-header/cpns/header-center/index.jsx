import React, { memo } from "react"
import CenterWrapper from "./style"
import Search from "@/assets/svg/search"
import { CSSTransition } from "react-transition-group"
import { shallowEqual, useSelector } from "react-redux"

const index = memo(({ searchHeight }) => {
  // 获取store中的数据
  const {
    headerConfig: { fixed }
  } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqual
  )

  return (
    <CenterWrapper>
      <CSSTransition
        in={!Boolean(searchHeight)}
        classNames="bar"
        timeout={200}
        unmountOnExit
      >
        {
          <div className="search">
            <div className="desc">
              <div className="item">任何地方</div>
              <span className="split">|</span>
              <div className="item">任意一周</div>
              <span className="split">|</span>
              <div className="item">添加人数</div>
            </div>
            <div className="icon">
              <Search></Search>
            </div>
          </div>
        }
      </CSSTransition>
      {fixed && (
        <CSSTransition
          in={Boolean(searchHeight)}
          classNames="plus"
          timeout={200}
          unmountOnExit
        >
          {
            <div className="search-plus">
              <div className="tabs">
                <div className="tab">住宿</div>
                <div className="tab">体验</div>
              </div>
              <div className="ipt-s">
                <div className="left split">
                  <div className="t">地点</div>
                  <div className="tip">搜索目的地</div>
                </div>
                <div className="center split mv">
                  <div className="t">入住</div>
                  <div className="tip">添加日期</div>
                </div>
                <div className="right mv">
                  <div className="t">人员</div>
                  <div className="tip">添加人数</div>
                </div>
                <div className="icon">
                  <Search></Search>
                </div>
              </div>
            </div>
          }
        </CSSTransition>
      )}
    </CenterWrapper>
  )
})

export default index
