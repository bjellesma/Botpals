import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner"
import BotNotFound from "../components/BotNotFound"

const Botpage = () => {
  const {id} = useParams()
  const [bot, setBot] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBot = async () => {
      try {
        const res = await fetch(`/api/bots/${id}`)
        const pageStatus = await res.status;
        if(pageStatus === 200){
          const data = await res.json();
          setBot(data)
        }
        setIsLoading(false)
      } catch (error) {
        console.log('error fetching data', error)
      }
    }
    fetchBot()
  }, [])
  // if there is no bot, we'll return the 404 bot
  if(bot == null){
    return <BotNotFound />
  }
  return (
    <>
      {isLoading ? (<Spinner loading={isLoading} />) : (<div>{bot.name}</div>)}
    </>
    
  )
}

export default Botpage
