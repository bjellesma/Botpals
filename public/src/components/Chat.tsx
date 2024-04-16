import React from 'react'

const Chat = () => {
    return (
        <section className='py-4'>
        <div className="container-xl flex justify-center">
            <form className="w-screen max-w-2xl">
                <div className="flex items-center border-b border-teal-500 py-2">
                <textarea id="chat-input" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
                focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Write your thoughts here..."></textarea>
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                        Sign Up
                    </button>
                    <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
        </section>
    )
}

export default Chat
