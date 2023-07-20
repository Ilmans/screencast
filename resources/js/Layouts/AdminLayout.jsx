import React from 'react'
import Header from './Header'
import AdminMenu from '@/Components/Layout/AdminMenu'
import { cn } from '@/lib/utils'

function AdminLayout({header= true,children,needFull=false}) {
  return (
    <div className={` `}>
    {header && <Header />}
    <div className="py-8 md:container md:grid md:grid-cols-5 md:mt-8 gap-x-4">
        <div className="hidden col-span-1 rounded-lg md:block h-fit">
            <AdminMenu />
        </div>
        <div
            className={cn(
                needFull ? "md:col-span-4" : "md:col-span-3",
                "h-fit rounded-lg"
            )}
        >
            {children}
        </div>
    </div>
</div>
  )
}

export default AdminLayout