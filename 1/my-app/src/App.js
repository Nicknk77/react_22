import './App.css';
import './components/message.css'
import { Message } from './components/Message';
import { useState } from 'react';

function App() {
  const [mess, setMess] = useState('Message');
  const setMessage = (ev) => {
    setMess(ev.target.value);
  }

  return (
    <div className="App">
      <input type="text" onChange={setMessage} />
      <Message mess={mess} />


    </div>
  );
}

export default App;
