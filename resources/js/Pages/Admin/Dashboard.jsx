import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'

function Dashboard() {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
Dashboard.layout = page => <AdminLayout children={page} />