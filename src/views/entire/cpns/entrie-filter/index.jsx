import React, { memo, useState } from "react"
import FilterWrapper from "./style"
import filterData from "@/assets/data/filter"
import { Flex, Tag } from "antd"
const EntrieFilter = memo(() => {
  const [checkedTagList, setCheckedTagList] = useState([])
  const handleTag = (tag, checked) => {
    const newTagList = checked ? [...checkedTagList, tag] : [...checkedTagList].filter((t) => t !== tag)
    setCheckedTagList(newTagList)
  }
  return (
    <FilterWrapper>
      <Flex gap={4} wrap align="center">
        {filterData.map((m) => (
          <div className="tag" key={m}>
            <Tag.CheckableTag
              key={m}
              checked={checkedTagList.includes(m)}
              onChange={(checked) => handleTag(m, checked)}
            >
              {m}
            </Tag.CheckableTag>
          </div>
        ))}
      </Flex>
    </FilterWrapper>
  )
})

export default EntrieFilter
