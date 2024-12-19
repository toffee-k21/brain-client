import React, { useRef, useState } from 'react'
import Button from './Button'
import { Share } from 'next/font/google'
import { CreateThought } from '@/graphql/mutations/createThought'

const Addthought = () => {

  const [thought, setThought] = useState('')

  const handleCreateThought = (thought:string,privte:boolean) =>{
    CreateThought({ content: thought, private: privte });
  }
  return (
      <div>
        <div>
        <textarea id="message" className="block py-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-none dark:bg-neutral-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:ring-0 outline-none resize-y min-h-[100px] max-h-[300px] " style={{ scrollbarWidth: "none" }} placeholder="Write your thoughts here..." onChange={(e) => setThought(e.target.value)} ></textarea>
       </div>
       <div className='flex py-2'>
        <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-pink-500 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={()=>handleCreateThought(thought,true)}>Dump!</button>
        <div className='p-2 text-pink-500 cursor-pointer hover:text-neutral-400' onClick={() => handleCreateThought(thought,false)}>Share</div>
       </div>
  </div>
  )
}

export default Addthought