import React from 'react'
import { BotInterface } from '../interfaces/BotInterface'

interface BotProps {
  bot: BotInterface;
}

const Bot:React.FC<BotProps> = ({bot}) => {
  return (
    <div className='bg-white rounded-xl shadow-md relative'>
    <div className='p-4'>
      <div className='mb-6'>
        <div className='text-gray-600 my-2'>{bot.name}</div>
        <h3 className='text-xl font-bold'>{bot.description}</h3>
      </div>

      <div className='mb-5'>{bot.location}</div>

      <button
        className='text-indigo-500 mb-5 hover:text-indigo-600'
      >
      </button>

      <div className='border border-gray-100 mb-5'></div>

      <div className='flex flex-col lg:flex-row justify-between mb-4'>
        {/* todo we will use react-icons */}
        {/* <div className='text-orange-700 mb-3'>
          <FaMapMarker className='inline text-lg mb-1 mr-1' />
          {job.location}
        </div> */}
        <a
          href={`/bots/${bot.id}`}
          className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
        >
          Get help from {bot.name}
        </a>
      </div>
    </div>
  </div>
  )
}

export default Bot
