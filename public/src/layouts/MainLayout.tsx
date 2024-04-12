import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <>
        <Navbar />
        {/* outlet is a special component that refers to any page that we're on */}
        <Outlet />
    </>
  )
}

export default MainLayout
