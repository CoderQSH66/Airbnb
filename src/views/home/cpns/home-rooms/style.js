import styled from "styled-components"

const RoomsWrapper = styled.div`
  .list {
    display: grid;
    grid-template-columns: repeat(${(props) => props.$colnums}, 1fr);
    grid-gap: 30px 10px;
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }
    .item {
      padding: 30px;
    }
  }
  .tabs {
    margin-top: 10px;
  }
`

export default RoomsWrapper
