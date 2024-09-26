import React, { memo, useCallback, useState } from "react"
import DetailPictureWrapper from "./style"
import PicturePlay from "@/component/picture-play"

const DetailPicture = memo((props) => {
  const { pictureUrls } = props
  const pictures = pictureUrls.slice(0, 5)
  const [showPic, setShowPic] = useState(false)
  const onShowPic = () => {
    setShowPic(true)
  }
  const onClose = useCallback((isClose) => {
    setShowPic(!isClose)
  }, [])
  return (
    <DetailPictureWrapper>
      <div className="picture-show">
        {pictures.map((m, i) => {
          return (
            <div className="pic" key={i} onClick={onShowPic}>
              <div className="cover"></div>
              <img src={m} alt="" />
            </div>
          )
        })}
      </div>
      <PicturePlay onClose={onClose} showPic={showPic} pictureUrls={pictureUrls}></PicturePlay>
    </DetailPictureWrapper>
  )
})

export default DetailPicture
