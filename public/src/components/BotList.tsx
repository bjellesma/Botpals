import { useState } from 'react'
import bots from '../data/bots.json'
import Bot from './Bot'
import { BotInterface } from '../interfaces/BotInterface'

const BotList = () => {
  // todo for now just slice the array to get the top 
  const topBots = bots.slice(0,3)
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      {/* key is needed because otherwise this generates an error */}
        {topBots.map((bot:BotInterface) => (
              <Bot key={bot.id} bot={bot} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default BotList
