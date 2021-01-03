import { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';
import fakeData from './components/fakeData/data.json'
import Cart from './components/Cart/Cart';

function App() {

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    setUsers(fakeData)
  }, [])

  const handleAddFriend = (user) => {
    const newCount = [...count, user];
    setCount(newCount);
    console.log('user', user);
  }

  return (
    <div>
      <h1 className="heading-title">User Collection</h1>
      <div className="app-body">
        <div className="user-container-section">
          <div className="user-list">
            {
              users.map(item => <User user={item} handleAddFriend={handleAddFriend} key={item.id}></User>)
            }
          </div>
        </div>

        <div className="cart-container">
          <Cart count={count}></Cart>
        </div>
      </div>
    </div >
  );
}

export default App;
