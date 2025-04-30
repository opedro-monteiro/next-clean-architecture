import { cn } from '@/lib/utils'
import type { InputHTMLAttributes, ReactNode } from 'react'

interface RootProps {
  children: ReactNode
  className?: string
}

function Root({ children, className }: RootProps) {
  return (
    <div
      className={cn(
        'flex w-full items-center gap-2 rounded-2xl bg-transparent px-4',
        'bg-input dark:bg-zinc-800/50',
        'shadow-sm',
        className,
      )}
    >
      {children}
    </div>
  )
}

function Icon({ children }: { children: ReactNode }) {
  return <div className="text-muted-foreground">{children}</div>
}

function Field(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="h-9 w-full text-base focus:outline-none md:text-sm"
    />
  )
}

export const SearchInput = {
  Root,
  Icon,
  Field,
}
