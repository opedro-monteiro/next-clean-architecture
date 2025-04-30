'use client'
import { SidebarContent } from '@/components/sidebar-content'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'

export default function Products() {
  return (
    <div>
      <section>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/products">Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
      <section className="mt-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-gray-600">
          Explore our collection of customized products for all styles and
          occasions.
        </p>
      </section>

      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SidebarContent />
      </Sheet>
    </div>
  )
}
