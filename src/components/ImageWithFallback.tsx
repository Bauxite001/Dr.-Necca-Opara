import { useState } from 'react'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string
}

export default function ImageWithFallback({ src, alt, className, fallbackClassName, ...props }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={fallbackClassName ?? className}
        style={{ background: 'linear-gradient(135deg, #F8F7F5 0%, #E8C84A22 100%)' }}
        aria-label={alt}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt ?? ''}
      className={className}
      onError={() => setFailed(true)}
      {...props}
    />
  )
}
