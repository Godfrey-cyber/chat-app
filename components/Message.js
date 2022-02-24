import React from 'react'
import ScrollToBottom from "react-scroll-to-bottom"
// import ChatContainer from './ChatContainer'

const Message = ({ messages, name }) => {
  
  return (
   <>
      {messages.map((message, index) => {
        let { text, user } = message
        let isSentByCurrentUser = false
        const trimmedName = !name ? "User" : name.trim().toLowerCase()
        if (user === trimmedName) {
            isSentByCurrentUser = true
        }
        console.log(text, user, name, message)
        return (
           <ScrollToBottom>
          <div key={index} className="flex flex-col">
          {isSentByCurrentUser ? (
          <div key={index} className="flex flex-col rounded-2xl w-4/5 bg-teal-400 justify-self-end ml-4 my-3 px-4">
              <p className="text-orange-600 pl-3 text-xs pt-2">{trimmedName}</p>
              <p className="text-gray-600 rounded-full text-xs p-2">{ text }</p>
            </div>
        ): (
            <div key={index} className="flex flex-col rounded-2xl w-4/5 bg-slate-800 justify-self-start ml-4 my-3 px-4">
                <p className="text-white pr-3 text-xs pt-2">{user}</p>
                <p className="text-white text-xs p-2">{ text }</p>
            </div>    
        )}
            </div>
     </ScrollToBottom>
            
      )})}
      </>
  )
}

export default Message