import React from 'react'
import { FaEdit } from "react-icons/fa";

const Card = ({details}:{details:any}) => {
  return (

          <div className=" my-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-950 dark:border-gray-700">
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{details.content}</p>
              <a href="#" className="inline-flex font-medium items-center text-pink-500 hover:underline ">
              <FaEdit className='mx-1' />
                  Edit your thought
              </a>
          </div>
  )
}

export default Card