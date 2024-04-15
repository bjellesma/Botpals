import { useState, useEffect } from 'react'
import Bot from './Bot'
import Spinner from './Spinner'
import { BotInterface } from '../interfaces/BotInterface'

const BotList = ({ topList = false }) => {
  const [bots, setBots] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // with useEffect, you always want to at least have an empty array as the second param to avoid a never ending loop
  // we can't use an async function directly on useEffect to fetch data so we make another function inside the useeffect function
  // we want async because we are querying the backend, we'll show a loading spinner while it loads
  useEffect(() => {
    const fetchBots = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/bots')
        const data = await res.json();
        setBots(data)
      } catch (error) {
        console.log('error fetching data', error)
      } finally {
        // finally will run whether the try passes or not so we can set the load spinner to false
        setIsLoading(false)
      }

    }
    fetchBots()
  }, [])

  // top jobs is a slice of the top three
  // todo want to be able to use db to rate bots in the future
  // let bots = topList ? botsData.slice(0,3) : botsData
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className='container-xl lg:container m-auto'>
        <h1 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>{topList ? 'Top Bots' : 'All Bots'}</h1>


        {isLoading ? (<Spinner loading={isLoading} />) :
          // this must be inside a fragment or you will get a reactnode error
          <>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {bots.map((bot: BotInterface) => (
              
                // {/* key is needed because otherwise this generates an error */}
                <Bot key={bot.id} bot={bot} />
              
            ))}
            </div>
          </>
        }


      </div>
    </section>
  )
}

export default BotList
