import styled from "styled-components"

const PicturePlayWrapper = styled.div`
  .paly-pic {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.9);
    .swiper {
      position: relative;
      max-width: 700px;
      margin: auto;
      aspect-ratio: 1;
      top: 25%;
      .img {
        aspect-ratio: 3/2;
      }
    }
    .indicator-list {
      position: absolute;
      bottom: 15%;
      left: 0;
      right: 0;
      width: 700px;
      margin: auto;
      overflow: hidden;
      .item {
        position: relative;
        width: 100px;
        aspect-ratio: 1;
        .cover {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6);
        }
        &.active {
          .cover {
            background-color: rgba(0, 0, 0, 0);
          }
        }
      }
    }
    .arrows {
      position: absolute;
      z-index: 9999;
      top: 40%;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      padding: 0 40px;
      .arrow {
        width: 50px;
        height: 50px;
        border-right: 10px solid #fff;
        border-bottom: 10px solid #fff;
        cursor: pointer;
      }
      .right {
        transform: rotate(-45deg);
      }
      .left {
        transform: rotate(135deg);
      }
    }
    .close {
      position: fixed;
      top: 5%;
      right: 5%;
      color: #fff;
      font-size: 16px;
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 5px;
      &:hover {
        background-color: var(--bg3);
        color: #000;
      }
    }
  }

  /* 动画 */
  .swiper-enter {
    opacity: 0;
  }
  .swiper-enter-active {
    opacity: 1;
    transition: all 0.1s;
  }
  .swiper-exit {
    opacity: 1;
  }
  .swiper-enter-active {
    opacity: 0;
    transition: all 0.1s;
  }
`

export default PicturePlayWrapper
