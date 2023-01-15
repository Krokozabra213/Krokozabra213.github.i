import c from './messages.module.css';
import {Route, Routes} from "react-router-dom";
import Message from "./message/message";

let messageData = [{id:'1', message: 'hi Ваня'},{id:'2', message: 'hi Петя'},{id:'3', message: 'hi Денис'},{id:'4', message: 'hi Артём'}]

let messagesElement = messageData
    .map(message => <Route path={message.id} element={<Message id={message.id}  message={message.message}/>}/> )

const messages = () => {
    return (
        <div className={c.messages}>
            <div className={c.messagesitem}>
                <Routes>
                    {messagesElement}
                </Routes>
            </div>
        </div>
    )
}

export default messages;