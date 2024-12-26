import React, { memo, Suspense, useEffect, useRef } from "react"
import { RouterProvider } from "react-router-dom"
import router from "./router"
import AppHeader from "@/component/app-header"
import Footer from "./component/app-footer"
import { shallowEqual, useSelector } from "react-redux"
import classNames from "classnames"

const App = memo(() => {
  // 获取store中的数据
  const {
    headerConfig: { fixed }
  } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig
    }),
    shallowEqual
  )

  const headerRef = useRef()

  useEffect(() => {
    console.log(fixed)
    fixed
      ? (headerRef.current.style.marginTop = "200px")
      : (headerRef.current.style.marginTop = "0")
    function setSh() {
      window.scrollY === 0 && fixed
        ? (headerRef.current.style.marginTop = "200px")
        : (headerRef.current.style.marginTop = "0")
    }
    window.addEventListener("scroll", setSh)
    return () => {
      window.removeEventListener("scroll", setSh)
    }
  }, [fixed])

  return (
    <div className="app">
      <header className={classNames("header", { fixed: fixed })}>
        <AppHeader></AppHeader>
      </header>
      <main className="main" ref={headerRef}>
        <Suspense fallback="loading">
          <RouterProvider router={router}></RouterProvider>
        </Suspense>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
})

export default App
