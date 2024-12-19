import React from 'react'
import { FaEdit } from "react-icons/fa";

const Card = ({ details }: { details: any }) => {
  if (!details) {
    return <div></div>
  }
  const timestamp = Number(details.createdAt); // Use directly if it's already in milliseconds
  console.log("timestamp", timestamp);

  const date = new Date(timestamp); // Create a date from milliseconds
  console.log("date", date);

  // Check for valid date
  const fullDate = !isNaN(date.getTime()) ? `${date.toString().split(" ")[2]} ${date.toString().split(" ")[1]} ${date.toString().split(" ")[3]}` : "Invalid Date";

  return (
    <div className="my-6 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-950 dark:border-gray-700">
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{details.content}</p>
      <div className='flex pt-6 justify-between items-center'>
        <a href="#" className="inline-flex font-medium items-center text-pink-500 hover:underline ">
          <FaEdit className='' />
          Edit your thought
        </a>
        <div className='text-gray-500 '>{fullDate}</div>
      </div>
    </div>
  )
}

export default Card