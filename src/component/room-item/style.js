import styled from "styled-components"

const RoomItemWrapper = styled.div`
  position: relative;
  cursor: pointer;
  .swiper {
    border-radius: 10px;
    overflow: hidden;
    .item1 {
      border-radius: 10px;
      aspect-ratio: 1;
      overflow: hidden;
      user-select: none;
    }
  }
  .img {
    width: 100%;
    border-radius: 10px;
    aspect-ratio: 1;
    overflow: hidden;
    user-select: none;
  }
  .desc {
    .msg {
      margin: 10px 0;
      color: var(--font-color2);
      /* color: ${(props) => props.verifycolor ?? "red"}; */
      font-weight: 500;
    }
    .name {
      color: var(--font-color);
      line-height: 1.5;
    }
    .price {
      padding-top: 5px;
      letter-spacing: 2px;
    }
  }
  &:hover .arrows {
    opacity: 1;
  }
  .arrows {
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 999;
    top: 140px;
    left: 0;
    right: 0;
    padding: 0 10px;
    opacity: 0;
    transition: opacity 0.3s;

    .arrow {
      width: 30px;
      height: 30px;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .indicator-list {
    position: absolute;
    top: 250px;
    left: 0;
    right: 0;
    width: 100px;
    height: 20px;
    margin: auto;
    overflow: hidden;
    .item {
      width: 20px;
      height: 20px;
      padding: 5px;
      border-radius: 50%;
      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.3s;
        &.active {
          background-color: var(--bg1);
          transform: scale(1.2, 1.2);
        }
      }
    }
  }
`

export default RoomItemWrapper
