import React from 'react'
import PagesNav from './pages/PagesNav'

const Navbar = () => {
    // todo make function to authenticate user
    const loggedIn = false
    return (
        <div>
            <nav className="bg-indigo-700 border-b border-indigo-500">
                <div className="float-right text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 pl-10">
                    <img className="w-10 h-10 rounded-full" src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="Rounded avatar" />
                    {/* when doing a conditional, you can only use a turnary */}
                    {loggedIn ? <h1>Hello Member</h1> : <h1>Hello guest</h1>}
                </div>
            
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                        >
                            <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
                                <img
                                    className="h-10 w-auto"
                                    src="https://robohash.org/mail@ashallendesign.co.uk"
                                    alt="Botpals"
                                />
                                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                                >Botpals</span
                                >
                            </a>
                            <div className="md:ml-auto">
                                <PagesNav />
                            </div>
                        </div>
                    </div>
                </div>
                
            </nav>
        </div>
    )
}

export default Navbar
