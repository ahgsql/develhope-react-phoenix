import React, { useEffect, useState } from "react";
import "./chatArea.css"
import axios from "axios";
import Pusher from 'pusher-js'


export default function LiveChatFeature() {
    const [history, setHistory] = useState([])
    const [message, setMessage] = useState("")
    let bind = false
    useEffect(() => {
        const pusher = new Pusher('cc9492824097dabab1e1', {
            cluster: 'eu'
        });
        const channel = pusher.subscribe('liveChat')
        if (!bind) {
            channel.bind('admin-message', function (data) {
                setHistory(prevhistory => [...prevhistory, { from: "admin", message: data.message }])
            });
            bind = true
        }
    }, [])


    const sendMessage = async () => {
        let response = await axios.post(import.meta.env.VITE_BASE_URL + "/api/chat/message", { from: "customer", message })
        if (response.data.status) {
            setHistory(prevhistory => [...prevhistory, { from: "customer", message }])
        }

    }
    return (
        <>
            <div className="chat-area">
                <div className="chat-history">
                    {history.map((message, i) => {
                        return <div className={message.from + "-msg message"} key={i}> {message.from}:{message.message}</div>
                    })}
                </div>
                <div className="chat-input">
                    <input type="text" className="message-input" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>

        </>
    )
}
