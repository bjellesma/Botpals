import { Link, useLoaderData } from "react-router-dom"
import Spinner from "../components/Spinner"
import Chat from "../components/Chat"
import BotNotFound from "../components/BotNotFound"
import { FaArrowLeft } from "react-icons/fa"

let isLoading = true;

const botLoader =async ({params}:any) => {
  let data = null
  try{
    const res = await fetch(`/api/bots/${params.id}`)
    const pageStatus = await res.status;
    // if api is not found, don't attempt to fetch json
    if(pageStatus === 200){
      data = await res.json();
    }
  }catch (error) {
    console.log('error fetching data', error)
  }
  isLoading = false
  return data
}

const Botpage = () => {
  const bot = useLoaderData()
  
  // if there is no bot, we'll return the 404 bot
  if(bot == null){
    return <BotNotFound />
  }
  return (
    <>
      {isLoading ? (<Spinner loading={isLoading} />) : (
        <>
          <section>
          <div className="container m-auto py-6 px-6">
            <Link
              to="/bots"
              className="text-indigo-500 hover:text-indigo-600 flex items-center"
            >
              <FaArrowLeft className="mr-2" /> Back to Bots
            </Link>
          </div>
        </section>
    
        <Chat bot={bot}/>
        </>
      )}
    </>
    
  )
}
// we can also now export the loader so that we can use it on other pages
export {Botpage as default, botLoader}
