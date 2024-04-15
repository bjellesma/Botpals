import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import BotsPage from './pages/BotsPage'
import BotPage from './pages/BotPage'

// the main router object containing all of the pages
const router = createBrowserRouter(
    createRoutesFromElements(
        // mainlayout is used so that it applies to every page within
        <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/bots' element={<BotsPage />} />
            {/* id is a variable that we can pass */}
            <Route path='/bots/:id' element={<BotPage />} />
            {/* the wildcard is a catchall meaning that all other pages will lead to a 404 */}
            <Route path='*' element={<NotFoundPage />} />
        </Route>
    )
)

const App = () => {


    // can only return one jsx element so we can't return a div and p tag
    return <RouterProvider router={router} />
}

export default App
