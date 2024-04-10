import React from 'react'
import bots from '../data/bots.json'
import Bot from './Bot'

const BotList = () => {
  return (
    <section className="bg-blue-50 px-4 py-10">
        {bots.map((bot) => (
              <Bot key={bot.id} bot={bot} />
            ))}
    </section>
  )
}

export default BotList
