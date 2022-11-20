import './App.css';
import './components/message.css'
import { Message } from './components/Message';
import { useEffect, useState } from 'react';
import { ListItem } from '@mui/material';
import { List } from '@mui/material';

function App() {
  const [mess, setMess] = useState('');
  const [author, setAuthor] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [greet, setGreet] = useState('');


  const setMessage = (ev) => {
    setMess(ev.target.value);
  }

  const setAuthorInput = (val) => {
    setAuthor(val);
  }


  const sendData = (ev) => {
    ev.preventDefault();
    setAuthorInput(document.querySelector('#authorId').value);
    sendToArray();
    document.querySelector('#authorId').focus();
  }
  const sendToArray = () => {
    if (mess.length > 0 && document.querySelector('#authorId').value.length > 0)
      setMessageList([...messageList, { author: document.querySelector('#authorId').value, text: mess }]);

  }

  useEffect(() => {
    setTimeout(() => { (author.length > 0) ? setGreet('Приветствую Вас, ' + author) : setGreet('') }, 1500)
  }, [author]);

  return (
    <div className="App">
      <div>
        <List>
          {messageList.map((item, id) => {
            ListItem.author = item.author;
            ListItem.text = item.text;
            return <ListItem key={id}><span>{ListItem.author}</span>: {ListItem.text}</ListItem>
          })}
        </List>
      </div>
      <div>
        <form onSubmit={sendData}>
          <legend>Enter author and text here.</legend>
          <input type="text" id='authorId' autoFocus={true} />
          <input type="text" onChange={setMessage} />
          <Message mess={mess} />
          <button className='butSend'>Send massage</button>
        </form>
        <ul className='listMessage'>
          {messageList.map((item, id) => {
            return <li key={id}><span>{item.author}</span>: {item.text}</li>
          })}
        </ul>
        <h2>{greet}</h2>

      </div>
    </div>

  );
}

export default App;
