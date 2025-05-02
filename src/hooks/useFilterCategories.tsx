import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function useFilterCategories() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const selectedCategories = searchParams.getAll('cat')

  const toggleCategory = (category: string) => {
    const current = new URLSearchParams(searchParams.toString())

    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]

    current.delete('cat')
    newCategories.forEach((cat) => current.append('cat', cat))

    router.push(`${pathname}?${current.toString()}`)
  }

  return {
    toggleCategory,
    selectedCategories,
  }
}
