import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import ListUser from './Partials/ListUser'

function Index({users}) {
  return (
    <div className="max-w-4xl">
        <Card className="p-6 space-y-6">
            <CardHeader>
                <CardTitle>User</CardTitle>
                <CardDescription>Seluruh user terdaftar</CardDescription>
            </CardHeader>
            <CardContent>
                <ListUser users={users} />
            </CardContent>
        </Card>
    </div>
  )
}

export default Index

Index.layout = page => <AdminLayout children={page} needFull={true} />