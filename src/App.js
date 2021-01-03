import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';
import fakeData from './components/fakeData/data.json'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(fakeData)
  }, [])

  return (
    <div>
      <h1 className="heading-title">User Collection</h1>
      <div className="app-body">
        <div className="user-container-section">
          <div className="user-list">
            {
              users.map(item => <User user={item}></User>)
            }
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
