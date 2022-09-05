import { useContext, useState } from "react";
import { UserContext } from "../../context/user";
import Error from "../error/Error";
import "./Login.css"

function Login(){

  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErros] = useState([])
  const {setUser} = useContext(UserContext)

  function handleSubmit(e){
    e.preventDefault()
    setLoading(!loading)
  


    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErros(err.errors));
      }
    });

  }

  return (
    <div className="login">
      <div className="roww">
        <div className="col-6 col-s-7 form">
          <div className="header">
            <p>Get Started</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="username">
              <span
                className="iconify"
                data-icon="icon-park-solid:edit-name"
                style={{ color: "#f3a446" }}
                data-width="48"
                data-height="48"
              ></span>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <hr />
            <div className="username">
              <span
                className="iconify"
                data-icon="bi:shield-lock"
                style={{ color: "#f3a446" }}
                data-width="48"
                data-height="48"
              ></span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <hr></hr>
            {
              errors ? errors.map(err => (<Error message={err} key= {err}/>)) : null
            }
            <div className="buttons">
              <p>Forgot Password?</p>
              <button type="submit">Sign In</button>
            </div>
          </form>
        </div>
        <div className="col-6 col-s-5 display">
          <header>
            <p>Welcome To</p>
            <img src={require("./1.jpeg")} alt="swahili spot" />
            <span>SWAHILI SPOT</span>
          </header>
          <div className="body">
            <p>
              Get the best of coastal meals in Kenya for value of your money
            </p>
          </div>
          <div className="creator">
            <span>Made With Love</span>
            <span className="span"></span>
            <span>Martin Kariuki</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login