import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import AdminLayout from '@/Layouts/AdminLayout'
import { Head } from '@inertiajs/react'
import React from 'react'
import ListSeries from './Partials/ListSeries'
import Pagination from '@/Components/Page/Pagination'

function Index({series}) {
  return (
   <div className="max-w-4xl">
    <Head title="Series" />
    <Card className="p-6 space-y-6">
        <CardHeader>
            <CardTitle>Semua Serie</CardTitle>
            <CardDescription>
                Semua seri yang telah dibuat
            </CardDescription>
        </CardHeader>
        <CardContent>
            <ListSeries series={series} />
            <div className="mt-4">
                <Pagination links={series.links} />
            </div>
        </CardContent>
    </Card>
   </div>
  )
}

export default Index
Index.layout = page => <AdminLayout children={page} needFull={true} />