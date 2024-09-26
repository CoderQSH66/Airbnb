import styled from "styled-components"

const DetailPictureWrapper = styled.div`
  .picture-show {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    cursor: pointer;
    .pic {
      position: relative;
      overflow: hidden;
      &:first-child {
        grid-area: 1/1/3/3;
      }
      .cover {
        z-index: 999;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: 0.3s;
      }
      img {
        transition: 0.3s;
      }
      &:hover {
        img {
          transform: scale(1.1, 1.1);
        }
      }
    }
    &:hover .pic:not(:hover) {
      .cover {
        opacity: 1;
      }
    }
  }
`

export default DetailPictureWrapper
