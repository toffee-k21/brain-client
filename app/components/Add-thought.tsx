import React from 'react'
import Button from './Button'
import { Share } from 'next/font/google'

const Addthought = () => {
  return (
      <div>
        <div>
              <textarea id="message" className="block py-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-none dark:bg-neutral-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-0 outline-none resize-y min-h-[100px] max-h-[300px] " style={{scrollbarWidth:"none"}} placeholder="Write your thoughts here..."></textarea>
       </div>
       <div className='flex py-2'>
         <Button>Dump!</Button>
         <div className='p-2 text-pink-500'>Share</div>
       </div>
  </div>
  )
}

export default Addthought