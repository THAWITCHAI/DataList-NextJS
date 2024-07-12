import React from 'react'

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div className='sidebar'>
      <h1>Sidebar</h1>
      <div className="item-menu">ADD</div>
      <div className="item-menu">SHOW ALL</div>
      <div className="item-menu">SELL</div>
      <div className="item-menu">MOVE</div>
    </div>
  )
}