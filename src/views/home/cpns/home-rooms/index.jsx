import React, { memo, useCallback, useEffect, useState } from "react"
import RoomsWrapper from "./style"
import RoomItem from "@/component/room-item"
import SectionHeader from "@/component/section-header"
import ScrollView from "@/component/scroll-view"

const HomeRooms = memo((props) => {
  const { roomdata, colnums = 4 } = props
  const { list, dest_list, dest_address } = roomdata
  const [city, setCity] = useState(dest_address?.[0].name)
  const rooms = list || dest_list?.[city]
  const tabs = dest_address?.map((m) => {
    return m.name
  })

  const changetab = useCallback((key) => {
    setCity(key)
  }, [])

  useEffect(() => {
    setCity(dest_address?.[0].name)
  }, [dest_address])

  return (
    <RoomsWrapper $colnums={colnums}>
      <div className="title">
        <SectionHeader title={roomdata?.title} subTtile={roomdata?.subtitle || ""}></SectionHeader>
      </div>
      {/* <div className="tabs">{tabs && <ScrollTabs tabs={tabs} changetab={changetab}></ScrollTabs>}</div> */}
      <div className="tabs">{tabs && <ScrollView tabs={tabs} changetab={changetab}></ScrollView>}</div>
      <ul className="list">
        {rooms?.slice(0, 8).map((m) => {
          return (
            <li className="item" key={m.id}>
              <RoomItem roomData={m}></RoomItem>
            </li>
          )
        })}
      </ul>
    </RoomsWrapper>
  )
})

export default HomeRooms
