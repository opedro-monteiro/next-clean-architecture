import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useFilterColors() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const selectedColors = searchParams.getAll('c')

  const toggleColor = (color: string) => {
    const current = new URLSearchParams(searchParams.toString())

    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((s) => s !== color)
      : [...selectedColors, color]

    current.delete('c')
    newColors.forEach((color) => current.append('c', color))

    router.push(`${pathname}?${current.toString()}`)
  }

  return {
    selectedColors,
    toggleColor,
  }
}
