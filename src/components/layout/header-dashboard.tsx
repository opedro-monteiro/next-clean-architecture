'use client'
import * as React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import {
  EditIcon,
  PlusIcon,
  Search,
  ShoppingCart,
  Trash2Icon,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SearchInput } from '../search-input'
import { ModeToggleButton } from '../toggle-mode'
import { Button } from '../ui/button'

export function HeaderDashboard() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <header className="bg-background/95 flex h-20 w-full justify-between border-b px-4 backdrop-blur md:px-8 lg:px-16">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="hover:bg-transparent">
              <Image
                src={`/assets/SHOP.CO-${theme === 'light' ? 'dark' : 'light'}.svg`}
                alt="Logo"
                width={100}
                height={100}
                className="h-8 w-auto"
              />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="/dashboard"
              className={navigationMenuTriggerStyle()}
            >
              <h1>Dashboard</h1>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-full flex-col gap-2 p-6 md:w-52 lg:w-72">
                <Button className="w-full" asChild variant="outline">
                  <NavigationMenuLink href="/dashboard/add-product">
                    <div className="flex items-center gap-2">
                      <PlusIcon className="h-4 w-4 text-green-500" />
                      Add Product
                    </div>
                  </NavigationMenuLink>
                </Button>
                <Button className="w-full" asChild variant="outline">
                  <NavigationMenuLink href="/dashboard/update-product">
                    <div className="flex items-center gap-2">
                      <EditIcon className="h-4 w-4 text-yellow-500" />
                      Update Product
                    </div>
                  </NavigationMenuLink>
                </Button>

                <Button className="w-full" asChild variant="outline">
                  <NavigationMenuLink href="/dashboard/delete-product">
                    <div className="flex items-center gap-2">
                      <Trash2Icon className="h-4 w-4 text-red-500" />
                      Remove Product
                    </div>
                  </NavigationMenuLink>
                </Button>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <SearchInput.Root>
              <SearchInput.Icon>
                <Search size={16} />
              </SearchInput.Icon>
              <SearchInput.Field
                type="text"
                placeholder="Search..."
                className="w-64"
              />
            </SearchInput.Root>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              className={navigationMenuTriggerStyle()}
            >
              <ShoppingCart className="h-4 w-4" />
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <ModeToggleButton />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
