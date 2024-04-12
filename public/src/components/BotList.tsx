import { useState } from 'react'
import botsData from '../data/bots.json'
import Bot from './Bot'
import { BotInterface } from '../interfaces/BotInterface'

const BotList = ({topList = false}) => {
  // top jobs is a slice of the top three
  // todo want to be able to use db to rate bots in the future
  let bots = topList ? botsData.slice(0,3) : botsData
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className='container-xl lg:container m-auto'>
        <h1 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>{topList ? 'Top Bots' : 'All Bots'}</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {/* key is needed because otherwise this generates an error */}
        {bots.map((bot:BotInterface) => (
              <Bot key={bot.id} bot={bot} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default BotList
