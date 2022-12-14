import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Signup from './components/signup/signup';
import Menu from './components/menu/Menu';
import Cart from "./components/cart/cart";
import Board from './components/dashboard/Board/Board';
import Navbar from './components/Navbar/Navbar';
import { UserContext } from './context/user';
// import Upload from './components/dashboard/upload/Upload';

function App() {
  const {user, setUser} = useContext(UserContext)
  const token = localStorage.getItem("jwt")

  useEffect(() => {
    fetch("https://swahili-spot-production.up.railway.app/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [user, token, setUser])

  return (
    <div className="App">
      <Navbar />
      <div className="routes">
        <Routes>
          <Route path="/dashboard" element={user && user.role === "admin" ? <Board /> : <Menu />} />
          <Route
            path="/login"
            element={!user ? <Login/> : <Menu /> }
          />
          <Route
            path="/signin"
            element={!user ? <Signup /> : <Menu />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Menu />} />
          {/* <Route path= "/upload" element = {<Upload />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
