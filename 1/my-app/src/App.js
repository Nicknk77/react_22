import './App.css';
import './components/message.css'
import { Message } from './components/Message';
import { useEffect, useState } from 'react';

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
  }
  const sendToArray = () => {
    if (mess.length > 0 && document.querySelector('#authorId').value.length > 0)
      setMessageList([...messageList, { id: messageList.length, author: document.querySelector('#authorId').value, text: mess }]);
  }

  useEffect(() => {
    setTimeout(() => { (author.length > 0) ? setGreet('Приветствую Вас, ' + author) : setGreet('') }, 1500)
  }, [author]);

  return (
    <div className="App">
      <form onSubmit={sendData}>
        <legend>Enter author and text here.</legend>
        <input type="text" id='authorId' />
        <input type="text" onChange={setMessage} />
        <Message mess={mess} />
        <button className='butSend'>Send massage</button>
      </form>
      <ul className='listMessage'>
        {messageList.map(item => {
          return <li key={item.id}><span>{item.author}</span>: {item.text}</li>
        })}
      </ul>
      <h2>{greet}</h2>

    </div>
  );
}

export default App;
