import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import ListInvoice from './Partials/ListInvoice'

function Index({invoices}) {
  return (
   <div className="max-w-4xl">
    <Card className="p-6 space-y-6">
        <CardHeader>
            <CardTitle>Invoice</CardTitle>
            <CardDescription>Seluruh Invoice user</CardDescription>
        </CardHeader>
        <CardContent>
            <ListInvoice invoices={invoices} />
        </CardContent>
    </Card>
   </div>
  )
}

export default Index
Index.layout = page => <AdminLayout children={page} needFull={true} />