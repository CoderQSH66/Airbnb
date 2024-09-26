import instance from "../http"

export function getEntireData(offset = 0, size = 20) {
  return instance.get("/entire/list", {
    params: {
      offset,
      size
    }
  })
}
