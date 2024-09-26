import styled from "styled-components"

const HeaderWrapper = styled.div`
  background-color: #fff;
  padding: 0 60px;
  border-bottom: 1px solid #eee;
  .content {
    display: flex;
    align-items: center;
    padding: 10px 0;
    height: 80px;
    .left {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  }
  > .search {
    height: ${(props) => props.$searchHeight}px;
    transition: all 0.2s;
  }
`

export default HeaderWrapper
