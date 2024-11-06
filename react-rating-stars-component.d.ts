declare module 'react-rating-stars-component' {
  import { ComponentType } from 'react'

  interface ReactStarsProps {
    count?: number
    size?: number
    color?: string
    activeColor?: string
    value?: number
    a11y?: boolean
    isHalf?: boolean
    edit?: boolean
    onChange?: (newRating: number) => void
  }

  const ReactStars: ComponentType<ReactStarsProps>

  export default ReactStars
}
