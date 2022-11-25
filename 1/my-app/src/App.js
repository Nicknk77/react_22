import './App.css';
import './components/message.css'
import { Message } from './components/Message';
import { useEffect, useState } from 'react';
import { ListItem, List, TextField, Button } from '@mui/material';


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
    setGreet('');
    setTimeout(() => { (author.length > 0) ? setGreet('Приветствую Вас, ' + author) : setGreet('') }, 1500)
  }, [author]);


  return (
    <div className="App">
      <form onSubmit={sendData}>
        <legend>Enter author and text here.</legend>
        <TextField id="authorId" variant="outlined" autoFocus={true} />
        <TextField type="text" onChange={setMessage} />
        <Message mess={mess} />
        <Button type='submit' variant="contained" className='butSend'>Send massage</Button>
      </form>
      <List className='listMessage'>
        {messageList.map((item, id) => {
          return <ListItem key={id}><span>{item.author}</span>: {item.text}</ListItem>
        })}
      </List>
      <h2>{greet}</h2>
    </div>

  );
}

export default App;
