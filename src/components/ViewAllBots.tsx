import { Link } from "react-router-dom"

const ViewAllBots = () => {
  return (
    <section className='m-auto max-w-lg my-10 px-6'>
      <Link
        to='/bots'
        className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
      >
        Get the list of Pals
      </Link>
    </section>
  )
}

export default ViewAllBots
