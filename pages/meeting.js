import Head from 'next/head';
import Image from 'next/image'
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import io from "socket.io-client";
import Chat from '../components/Chat';
import Header from '../components/Header';
import Messages from '../components/Messages';
import Users from '../components/Users';
import { useRouter} from"next/router"

    const ENDPOINT = 'https://next-chatapp.herokuapp.com/';
    let socket;
    const Meeting = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
        const router = useRouter()
        
  useEffect(() => {
    // const { name, room } = queryString.parse(location.search);
    const { name,room } = router.query
    console.log(name, room)
    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, () => {
      
    });
    return () => {
      socket.emit("disconnect1")
      socket.off()
    }
  }, [ENDPOINT, router.pathname ]);
  
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
  console.log(message, messages)
    return (
      <div className="w-screen h-screen relative bg-gray-100 overflow-x-hidden">
        <Head>
          <title>Realtime Chat Application</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header room={room} />
        <main className="grid grid-cols-12 lg:px-20 lg:space-x-3 mt-8">
          <Chat />
         <Messages messages={messages} message={message} setMessage={setMessage} name={name} sendMessage={sendMessage} /> 
          <Users users={users} />
        </main>
      </div>
      //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
    )
}
  export default Meeting