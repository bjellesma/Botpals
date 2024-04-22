import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa'
import { BotInterface } from '../interfaces/BotInterface'
import ProfilePicture from './ProfilePicture'

interface BotProps {
  bot: BotInterface;
}

const BotCard:React.FC<BotProps> = ({bot}) => {
  // this is an example of Component state where it is scoped to only the component that it is defined on
  // first array index is the name of the variable and the second is the function that it will call when changed
  const [showFullDescription, setShowFullDescription] = useState(false)
  const botPic = `/images/${bot.profile_pic}`
  return (
    <div className='bg-white rounded-xl shadow-md relative'>
    <div className='p-4'>
      <ProfilePicture src={botPic} />
      <div className='mb-6'>
        <div className='text-gray-600 my-2'>{bot.name}</div>
        <h3 className='text-xl font-bold'>{bot.tagline}</h3>
      </div>

      {/* use ternary operators to toggle fulldescription */}
      <div className='mb-5'><p className='mb-10'>{showFullDescription ? bot.fullDescription : bot.fullDescription.substring(0,50)}</p> 
      {/* Use a click event to call a function, the arrow function will have the prev state as param */}
      <span onClick={() => setShowFullDescription((prevState) => !prevState)} className='cursor-pointer text-indigo-500 hover:text-indigo-600'>{showFullDescription ? 'I don\'t care' : '...'}</span></div>

      <button
        className='text-indigo-500 mb-5 hover:text-indigo-600'
      >
      </button>

      <div className='border border-gray-100 mb-5'></div>

      <div className='flex flex-col lg:flex-row justify-between mb-4'>
        <div className='text-orange-700 mb-3'>
          <FaMapMarker className='inline text-lg mb-1 mr-1' />
          {bot.location}
        </div>
        <Link
          to={`/bots/${bot.id}/chat`}
          className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
        >
          Chat with {bot.name}
        </Link>
        <Link
          to={`/bots/${bot.id}/profile`}
          className='h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm'
        >
          See profile of {bot.name}
        </Link>
      </div>
    </div>
    
  </div>
  )
}

export default BotCard
