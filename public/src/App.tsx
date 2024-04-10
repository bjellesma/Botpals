import Hero from './components/Hero'
import Navbar from './components/Navbar'
import BotList from './components/BotList'
import Chat from './components/Chat'
import React from 'react'
import ViewAllBots from './components/ViewAllBots'

const App = () => {
    
    
    // can only return one jsx element so we can't return a div and p tag
    return (
        <>
            <Navbar />
            <Hero title="Welcome to Nodebot" subtitle="Home of all of your bot pals"/>
            {/* <Chat /> */}
            <BotList />
            <ViewAllBots />
        </>
    )
}

export default App
