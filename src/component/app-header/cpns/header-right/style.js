import styled from "styled-components"

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  .operate {
    display: flex;
    align-items: center;
    cursor: pointer;
    .global {
      padding: 15px;
      margin-right: 10px;
      border-radius: 50%;
      &:hover {
        background-color: var(--bg1);
      }
    }
    .menu {
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 10px 10px;
      width: 100px;
      border: 1px solid #ccc;
      border-radius: 25px;
      &:hover {
        box-shadow: var(--box-shadow1);
      }
      .menu-list {
        position: absolute;
        z-index: 9;
        top: 120%;
        left: -160%;
        width: 260px;
        padding: 10px 0;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: var(--box-shadow2);
        .item {
          padding: 15px;
          &.split {
            border-top: 1px solid var(--bg3);
          }
          &:hover {
            background-color: var(--bg1);
          }
        }
      }
    }
  }
`

export default RightWrapper
