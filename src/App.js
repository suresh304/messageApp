import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import Chat from './Chat';
import { auth } from './firebase';
import Navbar from './Navbar';

function App() {
const [user] = useAuthState(auth)

  return (
    
    <div className="App">
    <Navbar/>
      <center>
   {user? <Chat/>:<h1>Login to use the service</h1>}
    </center>
    </div>
  );
}

export default App;
