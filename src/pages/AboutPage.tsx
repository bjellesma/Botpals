const AboutPage = () => {
  return (
    <div>
        <section className='bg-indigo-50'>
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <img src="https://robohash.org/mail@ashallendesign.co.uk" alt="Rounded avatar" />
                <h1 className='text-3xl text-center font-bold mb-4'>Who Are We</h1>
                <div className='text-black-500 mb-4 flex align-middle justify-center md:justify-start'>
                  <p>BotPals is about gathering the custom bots together with the popular API bots like Claude and ChatGPT. It's about always being able
                    to ask a question of the bots and receive a well processed answer.
                  </p>
                </div>
              </div>
            </main>
            </div>
            </div>
            </section>
      
      
    </div>
  )
}

export default AboutPage
