import React from 'react'
import VerticalNavLink from '../VerticalNavLink'
import { cn } from '@/lib/utils'

function AdminMenu({dashboard = true}) {
  return (
    <ul
    className={cn(
        "flex flex-col ",
        dashboard ? "text-sm gap-y-2" : "gap-y-1 text-xs mb-2"
    )}
>
    {/* only guest can access this menu, this menu show in nav mobile */}

    {/* home */}
   
        <VerticalNavLink
            href="/admin/dashboard"
            icon="IconHomeEco"
            active={route().current("admin.dashboard")}
        >
            Dashboard
        </VerticalNavLink>
        <VerticalNavLink
            href="/admin/topics"
            icon="IconCategory2"
            active={route().current("admin.topics.index")}
        >
            Topik
        </VerticalNavLink>
        <VerticalNavLink
            href="/admin/series"
            icon="IconBrandMeta"
            active={route().current("admin.series.index")}
        >
            Series
        </VerticalNavLink>
        <VerticalNavLink
            href="/admin/articles"
            icon="IconBook"
            active={route().current("admin.series.index")}
        >
            Artikel
        </VerticalNavLink>
        <VerticalNavLink
            href="/admin/subscriptions"
            icon="IconCoin"
            active={route().current("admin.subscriptions.index")}
        >
            Langganan
        </VerticalNavLink>
        <VerticalNavLink
            href="/admin/package-prices"
            icon="IconReceipt2"
            active={route().current("admin.package_prices.index")}
        >
            Daftar Harga
        </VerticalNavLink>
        <VerticalNavLink
            href="/admin/invoices"
            icon="IconFileDollar"
            active={route().current("admin.invoices.index")}
        >
            Invoices
        </VerticalNavLink>
        <VerticalNavLink
            href="/admin/payment_methods"
            icon="IconCreditCard"
            active={route().current("admin.payment_methods.index")}
        >
            Metode Pembayaran
        </VerticalNavLink>
        <VerticalNavLink
            href="/admin/users"
            icon="IconUsers"
            active={route().current("admin.users.index")}
        >
            Users
        </VerticalNavLink>
        <VerticalNavLink
            href="/admin/settings"
            icon="IconSettingsBolt"
            active={route().current("admin.settings.index")}
        >
            Website Setting
        </VerticalNavLink>

       
        </ul>
  )
}

export default AdminMenu