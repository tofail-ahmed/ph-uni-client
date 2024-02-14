import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
      <h3>This iis navbar</h3>
      <Outlet/>
      <h3>AdminLayout</h3>
    </div>
  )
}

export default AdminLayout