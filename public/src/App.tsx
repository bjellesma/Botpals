import Hero from './components/Hero'
import Navbar from './components/Navbar'
import BotList from './components/BotList'
import Chat from './components/Chat'
import React from 'react'

const App = () => {
    
    
    // can only return one jsx element so we can't return a div and p tag
    return (
        <>
            <Navbar />
            {/* <Hero /> */}
            <Chat />
            <BotList />
        </>
    )
}

export default App
