export type Size =
  | 'Small'
  | 'Medium'
  | 'Large'
  | 'XLarge'
  | 'XXLarge'
  | '3X-Large'

export const SIZES: Record<Size, string> = {
  Small: 'Small',
  Medium: 'Medium',
  Large: 'Large',
  XLarge: 'XLarge',
  XXLarge: 'XXLarge',
  '3X-Large': '3X-Large',
}
