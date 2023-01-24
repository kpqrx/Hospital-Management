import { theme } from '@/theme'
import dynamic from 'next/dynamic'
import type { IconType } from 'react-icons/lib'
import type { IconProps } from './Icon.types'

function Icon(props: IconProps) {
  const { name, size = 20, color = 'black', ...restProps } = props

  const iconModuleName = `Hi${name}` as keyof IconType

  const LoadedIcon = dynamic(
    () => import('react-icons/hi').then((module) => module[iconModuleName]),
    {
      loading: () => (
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        />
      ),
    }
  ) as IconType

  return (
    <LoadedIcon
      size={size}
      color={theme.color[color]}
      {...restProps}
    />
  )
}

export default Icon
