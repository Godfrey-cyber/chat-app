import React from 'react'

const ChatContainer = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false
    const trimmedName = name.trim().toLowerCase()
    if (user === trimmedName) {
        isSentByCurrentUser = true
    }
    console.log(text, user, message, name)
  return (
    isSentByCurrentUser ? (
          <div className="flex bg-teal-400 justify-self-end">
              <p className="text-pink-300 pr-3 bg-yellow-400 text-xs p-1">{trimmedName}</p>
              <p className="text-gray-600 text-xs bg-yellow-50 p-2">{ text }</p>
            </div>
        ): (
            <div className="flex bg-gray-600 justify-self-start">
                <p className="text-pink-300 bg-yellow-400 text-xs p-1 pl-3">{user}</p>
                <p className="text-gray-600 text-xs bg-yellow-50 p-2">{ text }</p>
            </div>    
        )
  )
}

export default ChatContainer