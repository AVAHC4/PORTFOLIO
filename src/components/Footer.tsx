import { Link } from '@radix-ui/themes'
import React from 'react'


const Footer = () => {
  return (
    <footer className='w-full px-[400px] max-[1285px]:px-[350px] max-lg:px-64 max-sm:px-4 py-10 flex flex-col max-sm:text-center items-center mt-4 pb-8'>
      <div className="w-full">
        <p className='text-sm max-sm:text-xs'>Designed and Developed by <Link href='https://www.linkedin.com/in/akhil-chava-96b314258/' target='_blank'> Akhil Chava </Link></p>
      </div>

    </footer>
  )
}

export default Footer
