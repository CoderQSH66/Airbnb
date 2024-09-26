import { createBrowserRouter, Navigate } from "react-router-dom"
import { lazy } from "react"
import Demo from "@/views/demo"

const Home = lazy(() => import("@/views/home"))
const Detail = lazy(() => import("@/views/detail"))
const Entire = lazy(() => import("@/views/entire"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/detail",
    element: <Detail></Detail>
  },
  {
    path: "/entire",
    element: <Entire></Entire>
  },

  {
    path: "/demo",
    element: <Demo></Demo>
  }
])

export default router
