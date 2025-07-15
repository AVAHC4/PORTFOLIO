import React from 'react'
import { Link, Avatar as Picture } from '@radix-ui/themes'

const Avatar = () => {
  return (
    <Link href='https://www.linkedin.com/in/akhil-chava-96b314258/' target='_blank'>
      <Picture
        src='/space.jpeg'
        fallback="A"
        size='6'
        radius='full'
      />
    </Link>
  )
}

export default Avatar