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
import { Search, ShoppingCart } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SearchInput } from './search-input'
import { ModeToggleButton } from './toggle-mode'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Clothes',
    href: '/products/clothes',
    description:
      'Explore our collection of customized clothing for all styles and occasions.',
  },
  {
    title: 'Caps',
    href: '/products/caps',
    description:
      'Personalized caps with exclusive designs for every personality.',
  },
  {
    title: 'Jeans',
    href: '/products/jeans',
    description:
      'Discover our jeans line, combining comfort and style in every detail.',
  },
  {
    title: 'Accessories',
    href: '/products/accessories',
    description: 'Unique accessories to complement your look with personality.',
  },
  {
    title: 'Footwear',
    href: '/products/footwear',
    description: 'Customized shoes and sneakers for comfort and style.',
  },
  {
    title: 'Promotions',
    href: '/products/promotions',
    description: 'Don’t miss our current deals on selected items.',
  },
]

export function Header() {
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
            <NavigationMenuTrigger>Clothes</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/#"
              className={navigationMenuTriggerStyle()}
            >
              about
            </NavigationMenuLink>
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
