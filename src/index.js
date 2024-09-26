import { createRoot } from "react-dom/client"
import App from "@/App"
import "normalize.css"
import "@/assets/style/index.less"
import { ThemeProvider } from "styled-components"
import theme from "./assets/theme"
import { ConfigProvider } from "antd"
import { Provider } from "react-redux"
import store from "./store"

const root = createRoot(document.querySelector("#root"))

root.render(
  <ConfigProvider
    theme={{
      components: {
        Pagination: {
          colorPrimary: "#ff385c",
          colorPrimaryBorder: "#ff385c",
          controlOutline: "#ff385c",
          colorPrimaryHover: "#ff385c",
          colorBorder: "#ff385c"
        }
      },
      cssVar: true
    }}
  >
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App></App>
      </Provider>
    </ThemeProvider>
  </ConfigProvider>
)
