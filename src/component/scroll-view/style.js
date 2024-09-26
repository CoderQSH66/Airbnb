import styled from "styled-components"

const WrapperScrollView = styled.div`
  .scroll-view {
    position: relative;
    overflow: hidden;
    margin: 0 30px;
    border: 1px solid var(--bg1);
    border-radius: 30px;
    .tabs {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      height: 79px;
      translate: 0;
      transition: all 0.3s;
      cursor: pointer;
      /* overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    } */
      .item {
        flex: none;
        min-width: 79px;
        padding: 0 20px;
        text-align: end;
      }
    }
    .arrow {
      position: absolute;
      z-index: 999;
      top: 0;
      width: 79px;
      height: 100%;
      border: none;
      border-radius: 50%;
      background-color: transparent;
      cursor: pointer;
      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 1px solid var(--bg3);
        background-color: #fff;
      }
    }
    .left {
      left: 0;
      .icon {
        box-shadow: 10px 0 20px 10px #fff;
        margin-left: -6px;
      }
    }
    .right {
      right: 0;
      .icon {
        box-shadow: -10px 0 20px 10px #fff;
        margin-right: -6px;
      }
    }
    .active {
      color: var(--primary-color);
    }
  }
`

export default WrapperScrollView
