import styled from "styled-components"

const PaginationWrapper = styled.div`
  margin: 20px 0;
  /* .ant-pagination-item-active {
    color: var(--primary-color) !important;
    border-color: var(--primary-color);
    &:hover {
      border-color: var(--primary-color);
    }
  } */
  .ant-select:hover .ant-select-selector {
    border-color: var(--primary-color) !important;
  }
`

export default PaginationWrapper
