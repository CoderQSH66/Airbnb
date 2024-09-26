import styled from "styled-components"

const CenterWrapper = styled.div`
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    border: 1px solid var(--bg3);
    border-radius: 25px;
    box-shadow: var(--box-shadow1);
    &:hover {
      box-shadow: 0 3px 5px var(--bg2);
      cursor: pointer;
    }
    .desc {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 20px;
      .split {
        margin: 0 15px;
        color: var(--bg2);
      }
    }
    .icon {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      color: #fff;
      background-color: var(--primary-color);
    }
  }
  .search-plus {
    position: fixed;
    top: 1%;
    left: 0;
    right: 0;
    width: 60%;
    margin: auto;
    .tabs {
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 19px;
      .tab {
        padding: 10px 20px;
        margin-bottom: 20px;
      }
    }
    .ipt-s {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 60px;
      border-radius: 30px;
      box-shadow: 0 2px 5px 0 var(--bg2);
      padding: 0 10px 0 30px;
      background-color: #fff;
      .center {
        flex: 1;
      }
      .split {
        border-right: 1px solid var(--bg2);
      }
      .mv {
        padding-left: 20px;
      }
      .tip {
        margin-top: 5px;
        color: #696969;
      }
      .icon {
        width: 50px;
        height: 50px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: #fff;
        background-color: var(--primary-color);
      }
    }
  }
  .bar-exit {
    opacity: 1;
  }
  .bar-exit-active {
    transform: translateY(100%) scaleX(1.2);
    opacity: 0;
    transition: all 0.2s;
  }
  .bar-enter {
    transform: translateY(100%) scaleX(1.5);
    opacity: 0;
  }
  .bar-enter-active {
    transform: translateY(0) scaleX(1);
    opacity: 1;
    transition: all 0.2s;
  }
  .plus-enter {
    opacity: 0;
  }
  .plus-enter-active {
    opacity: 1;
    transition: all 0.2s;
  }
  .plus-exit {
    opacity: 1;
  }
  .plus-exit-active {
    transform: translateY(-20%) scale(0.5, 0.5);
    opacity: 0;
    transition: all 0.2s;
  }
`

export default CenterWrapper
