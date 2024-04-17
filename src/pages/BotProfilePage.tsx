import { Link, useLoaderData } from "react-router-dom"
import Spinner from "../components/Spinner"
import BotNotFound from "../components/BotNotFound"
import ProfilePicture from "../components/ProfilePicture"
import { FaArrowLeft, FaMapMarker } from "react-icons/fa"

const BotProfilePage = () => {
    // because we passed the loader attribute to the component on app, useloaderdata will take the loader from the attribute
    const bot = useLoaderData()
    const botPic = `/public/images/${bot.profile_pic}`
  // if there is no bot, we'll return the 404 bot
  if(bot == null){
    return <BotNotFound />
  }
  return (
    <>
    
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/bots'
            className='text-indigo-500 hover:text-indigo-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to All bots
          </Link>
        </div>
      </section>
        
      <ProfilePicture src={botPic} />

      <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{bot.name}</div>
                <h1 className='text-3xl font-bold mb-4'>{bot.tagline}</h1>
                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-1' />
                  <p className='text-orange-700'>{bot.location}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                  {bot.name || 'Bot'}'s Info
                </h3>

                <p className='mb-4'>{bot.fullDescription}</p>

              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>Origins</h3>

                <h2 className='text-2xl'>{bot.builder.name}</h2>

                <p className='my-2'>{bot.builder.description}</p>

                <hr className='my-4' />

                <h3 className='text-xl'>Birthplace:</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {bot.builder.birthplace}
                </p>

                <h3 className='text-xl'>Parent:</h3>

                <p className='my-2 bg-indigo-100 p-2 font-bold'>
                  {' '}
                  {bot.builder.parent}
                </p>
              </div>

              {/* <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Job</h3>
                <Link
                  to={`/edit-bot/${bot.id}`}
                  className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(bot.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete Job
                </button>
              </div> */}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default BotProfilePage
