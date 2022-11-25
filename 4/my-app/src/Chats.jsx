import { useParams, useState } from 'react';
import { ChatList } from './Chatlist';
import { MessagesList } from './MessagesList';

const initialChats = {
    id1: {
        name: "Chat1",
        messages: [{ text: "FirstMessage", author: "AUTHORS.BOT" }],
    },
    id2: {
        name: "Chat2",
        messages: [{ text: "FirstMessageHereToo!", author: "AUTHORS.ME" }],
    },
};

export default function Chats() {
    const [chatId, setChatId] = useState('');
    const [chats, setChats] = useState(initialChats);
    // if (!chats[chatId]) {
    //     return null
    // }
    return (
        <>
            <header>Header</header>
            <div className="wrapper">
                <div>chat
                    <ChatList
                        chats={chats}
                        chatId={chatId}
                    />
                </div>
                <div>
                    <MessagesList messages={'FirstMessage'} />
                </div>
            </div>
        </>
    );
}