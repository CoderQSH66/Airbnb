import styled from "styled-components"

const WrapperScrollTabs = styled.div`
  padding: 20px 30px 0 30px;
  .tabs {
    .ant-tabs-tab:hover,
    .ant-tabs-tab:active,
    .ant-tabs-tab-btn:active,
    .ant-tabs-tab-active .ant-tabs-tab-btn {
      color: var(--primary-color) !important;
    }
  }
`

export default WrapperScrollTabs
