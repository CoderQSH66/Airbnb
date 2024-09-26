import styled from "styled-components"

const FilterWrapper = styled.div`
  .tag {
    margin: 10px 0;
    .ant-tag {
      font-size: 17px;
      &:hover {
        color: var(--primary-color);
      }
    }
    .ant-tag-checkable-checked {
      background-color: var(--primary-color);
      &:hover {
        color: #fff;
      }
    }
  }
`

export default FilterWrapper
