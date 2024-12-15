"use client"
import { getToken } from '@/graphql/queries/user'
import { GoogleLogin } from '@react-oauth/google'
import Link from 'next/link'
// import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
  
  const pathname = usePathname()
  return (
    <div className='px-7 md:px-[30%] my-4 flex'>
      {pathname == '/' ? <div className='text-pink-500'><Link href={'/'}>Second Brain</Link></div>: <div className='text-gray-500'><Link href={'/'}>Second Brain</Link></div>}
      {pathname == '/explore' ? <div className='text-pink-500'><Link href={'/explore'}>/ Explore</Link></div>:<div className='text-gray-500'><Link href={'/explore'}>/ Explore</Link></div>}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <GoogleLogin
        onSuccess={async credentialResponse => {
          console.log(credentialResponse);
           const data:any = await getToken(credentialResponse.credential!);
          localStorage.setItem('second_brain_token', data.verifyGoogleToken);
          toast.success('Login Successful');
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />;
      {/* <div className='text-gray-500'><span>{" / "} </span>explore /</div> */}
    </div>
  )
}

export default Header