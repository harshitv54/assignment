import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image  src="/assets/logo.svg" alt="logo" className='w-auto' width={5000} height={5000} />
    </div>
  )
}

export default Logo