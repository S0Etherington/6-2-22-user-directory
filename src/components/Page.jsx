import React from 'react'
import data from '../data'

const Page = (props) => {
    const {selectedIndex, setSelectedIndex} = props
  return (
    <div>{data[selectedIndex].id}/25</div>
  )
}

export default Page