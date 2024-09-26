import styled from "styled-components"

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 30px 20px;
  .item {
    width: 100%;
    aspect-ratio: 1;
  }
`

export default MainWrapper
