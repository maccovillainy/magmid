import React from 'react'
import Sidebar from '../components/sidebar'

export default (props) => {
  return (
    <div className="container app">
      <Sidebar/>
      {props.children}
    </div>
  )
}