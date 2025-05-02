import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useFilterSizes() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const selectedSizes = searchParams.getAll('s')

  const toggleSize = (size: string) => {
    const current = new URLSearchParams(searchParams.toString())

    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size]

    current.delete('s')
    newSizes.forEach((s) => current.append('s', s))

    router.push(`${pathname}?${current.toString()}`)
  }

  return {
    selectedSizes,
    toggleSize,
  }
}
