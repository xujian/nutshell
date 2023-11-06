export const sizes = [
  'xs', 'sm', 'md', 'lg', 'xl'
] as const

export type Size = typeof sizes[number]

export const colors: string[] = [
  'primary',
  'secondary',
  'accent',
  'neutral',
  'positive',
  'negtive',
  'warning'
]

export const variants: string[] = [
  'solid', 'outlined', 'soft', 'plain'
]