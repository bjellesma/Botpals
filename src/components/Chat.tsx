import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { BotInterface } from '../interfaces/BotInterface'
import ProfilePicture from './ProfilePicture'

interface BotProps {
    bot: BotInterface;
  }

const Chat:React.FC<BotProps> = ({bot}) => {
    const [formText, setFormText] =useState("")
    const [sentText, setSentText] = useState("")
    const [response, setResponse] =useState("")
    const botPic = `/public/images/${bot.profile_pic}`
    const chatPlaceholder = `Chat with ${bot.name}...`

    const navigate = useNavigate();

    const addChat = async (chat:string) => {
        const res = await fetch(`https://bjellesma.pythonanywhere.com/api/bots/${bot.id}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(chat)
            
        })
        const data = await res.json();
        return data
    }
    
    const submitForm = async (event:any) => {
        event.preventDefault();
        // sent text is to be a copy of the last chat
        setSentText(formText)
        let res = await addChat(formText)
        console.log(res)
        setResponse(res)
        // clear form
        setFormText("")
    }

    return (
        <section className='py-4'>
            <ProfilePicture src={botPic} />
            <div className="chat-container container-xl flex justify-center">
                <form className="w-screen max-w-2xl" onSubmit={submitForm}>
                    <div className=" flex items-center border-b border-teal-500 py-2">
                        {/* all react forms that are using a usestate object must have an onchange event handler prop */}
                        <textarea id="chat-input" rows="4" className="chat-bubble block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={chatPlaceholder} value={formText} onChange={(event) => {setFormText(event.target.value)}}></textarea>
                        
                    </div>
                    <button type="submit" className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 
                    text-sm border-4 text-white m-3 py-1 px-2 rounded">
                            Send
                        </button>
                    <button type="button" className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 
                    text-sm border-4 text-white py-1 px-2 rounded" onClick={() => {navigate(`/bots/${bot.id}/profile`)}}>Back to Profile</button>
                </form>
                {/* onNavigate is hook that we can use for a redirect */}
                
                
            </div>
            <div className="chat-container-sender container-xl flex flex-end">
                <div className="flex items-center py-2">
                    <textarea readOnly id="chat-output-sender" rows="4" className="chat-bubble-sender block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
                            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={sentText}></textarea>
                </div>
            </div>
            <div className="chat-container-receiver container-xl flex flex-start">
                <div className="flex items-center py-2">
                    <textarea readOnly id="chat-output-receiver" rows="4" className="chat-bubble-receiver block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
                            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={response} onChange={(event) => {setResponse(event.target.value)}}></textarea>
                            </div>
            </div>
            
        </section>
    )
}

export default Chat
