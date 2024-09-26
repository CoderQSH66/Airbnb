import styled from "styled-components"

const LongWrapper = styled.div`
  .main {
    max-width: 1715px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 20px 0;
    margin: 10px 0;
    .item {
      position: relative;
      flex: none;
      width: 200px;
      height: 250px;
      margin-right: 15px;
      &:last-of-type {
        margin-right: 0;
      }
      .img {
        height: 100%;
        border-radius: 13px;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .desc {
        position: absolute;
        z-index: 2;
        top: 70%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        color: #fff;
        .name {
          font-size: 17px;
          font-weight: bold;
        }
        .price {
          font-size: 14px;
          margin-top: 5px;
        }
      }
      .cover {
        position: absolute;
        z-index: 1;
        top: 60%;
        bottom: 0;
        width: 100%;
        border-radius: 0 0 13px 13px;
        background-image: linear-gradient(to top, rgb(0, 0, 0) 3%, rgba(0, 0, 0, 0));
      }
    }
  }
`

export default LongWrapper
