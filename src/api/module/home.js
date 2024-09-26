import instance from "../http"

/**
 * @description 获取高性价比房源
 * @returns {Promise<any>}
 *
 */
export function getGoodPriceData() {
  return instance.get("/home/goodprice")
}

/**
 * @description 获取高分房源
 * @returns {Promise<any>}
 *
 */
export function getHighscoreData() {
  return instance.get("/home/highscore")
}

/**
 * @description 获取折扣数据
 * @returns {Promise<any>}
 *
 */
export function getDiscountData() {
  return instance.get("/home/discount")
}

/**
 * @description 获取热门推荐数据
 * @returns {Promise<any>}
 *
 */
export function getHotrecommenddestData() {
  return instance.get("/home/hotrecommenddest")
}

/**
 * @description 获取向往城市数据
 * @returns {Promise<any>}
 *
 */
export function getLongFortData() {
  return instance.get("/home/longfor")
}

/**
 * @description 获取向往城市数据
 * @returns {Promise<any>}
 *
 */
export function getPlusData() {
  return instance.get("/home/plus")
}
