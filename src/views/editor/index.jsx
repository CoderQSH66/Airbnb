import React, { memo, useState, useEffect } from "react"

import { Editor, Toolbar } from "@wangeditor/editor-for-react"
import { useDispatch } from "react-redux"
import { setConfigAction } from "@/store/main"

const MyEditor = memo(() => {
  const dispatch = useDispatch()
  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    dispatch(setConfigAction({ fixed: false }))
  }, [dispatch])
  // editor 实例
  const [editor, setEditor] = useState(null)

  // 编辑器内容
  const [html, setHtml] = useState("<p>hello</p>")

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml("<p>hello world</p>")
    }, 1500)
  }, [])

  // 工具栏配置
  const toolbarConfig = {} // JS 语法

  // 编辑器配置
  const editorConfig = {
    placeholder: "请输入内容..."
  }

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])
  return (
    <>
      <div style={{ border: "1px solid #ccc", zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: "1px solid #ccc" }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={(editor) => setHtml(editor.getHtml())}
          mode="default"
          style={{ height: "500px", overflowY: "hidden" }}
        />
      </div>
      <div style={{ marginTop: "15px" }}>{html}</div>
    </>
  )
})

export default MyEditor
