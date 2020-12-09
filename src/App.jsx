import React from 'react';
import Chat from './components/Chat';
import Navbar from './components/Navbar';
import {ChatContext} from './context/ChatProvider';

function App() {

  const {user} = React.useContext(ChatContext)

  return user !== null ? (
    <div className="App">
      <Navbar/>
      {
        user.estado ? (
          <Chat/>
        ) : (
          <div className="lead text-center mt-5">Inicia sesión para chatear</div>
        )
      }
    </div>
  ) : (
    <div>Cargando...</div>
  )
}

export default App;
