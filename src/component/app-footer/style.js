import styled from "styled-components"

const FooterWrapper = styled.div`
  padding: 20px 0;
  .main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    .title {
      font-weight: bold;
      margin: 5px 0;
      color: var(--primary-color);
    }
    .li {
      display: block;
      padding: 10px 0;
    }
  }
`
export default FooterWrapper
