"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
  
  const pathname = usePathname()
  return (
    <div className='px-7 md:px-[16%] my-4 flex absolute top-0'>
      {pathname == '/' ? <div className='text-pink-500'><Link href={'/'}>Second Brain</Link></div>: <div className='text-gray-500'><Link href={'/'}>Second Brain</Link></div>}
      {pathname == '/explore' ? <div className='text-pink-500'><Link href={'/explore'}>/ Explore</Link></div>:<div className='text-gray-500'><Link href={'/explore'}>/ Explore</Link></div>}
      {/* <div className='text-gray-500'><span>{" / "} </span>explore /</div> */}
    </div>
  )
}

export default Header