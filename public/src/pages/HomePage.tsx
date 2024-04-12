import Hero from '../components/Hero'
import BotList from '../components/BotList'
import Chat from '../components/Chat'
import ViewAllBots from '../components/ViewAllBots'

const HomePage = () => {
  return (
    <>
            
            <Hero title="Welcome to Botpals" subtitle="Home of all of your bot pals"/>
            {/* <Chat /> */}
            <BotList topList={true}/>
            <ViewAllBots />
        </>
  )
}

export default HomePage
