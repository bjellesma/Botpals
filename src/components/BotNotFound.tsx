import { Link } from "react-router-dom"
import {FaExclamationTriangle} from 'react-icons/fa'

const BotNotFound = () => {
  return (
    <div>
      <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">The 404 Bot strikes again</h1>
      <p className="text-xl mb-5">This is not the bot you are looking for</p>
      <Link
        to="/bots"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >Go to all bots</Link>
    </section>
    </div>
  )
}

export default BotNotFound
