import React from 'react'
import Message from './Message'

const Messages = ({ messages, setMessage, message, name, sendMessage}) => {
   console.log(messages, message, name)
  return (
   
    <div className="flex-col col-span-12 lg:col-span-6 h-screen relative scrollbar-hide overflow-y-auto bg-white rounded-sm border border-gray-200 mb-16">
      <Message messages={messages} name={name} />
      <form onSubmit={e => sendMessage(e)} action="" className="grid grid-cols-12 space-x-3 fixed bottom-1 left-0 right-0 bg-teal-100 h-12 py-3 p-3">
        <input
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
          type="text" name="" id="" className="p-3 focus:outline-none bg-white border border-gray-300 rounded-full h-10 col-span-11 my-auto" placeholder="Type a message..." />
        <button type="submit" className="col-span-1 p-2 bg-teal-500 rounded-full ">S</button>
      </form>
    </div>
  )
}

export default Messages