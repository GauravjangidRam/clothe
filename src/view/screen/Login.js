
import { useNavigate } from "react-router-dom";
import "../style/formstyle.css";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

function Login() {
  const nav = useNavigate();

  function clearform() {
    document.getElementById("loginForm").reset();
    clearLocalStorage(); // Call the function to clear localStorage
  }

  function clearLocalStorage() {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("pswd");
    // Remove any other items you have stored in localStorage
  }

  function register() {
    nav("/Register");
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logStatus, setLogStatus] = useState(false);

  const infoName = (event) => {
    setName(event.target.value);
  };

  const infoEmail = (event) => {
    setEmail(event.target.value);
  };

  const infoPassword = (event) => {
    setPassword(event.target.value);
  };

  const onPress = () => {
    let localLog = false;
    if (localStorage.getItem("username") === name) {
      if (localStorage.getItem("email") === email) {
        if (localStorage.getItem("pswd") === password) {
          alert("Successfully logged in");
          localLog = true;
          setLogStatus(true);
        } else {
          console.log("Password is incorrect");
        }
      } else {
        alert("Email is incorrect");
      }
      // alert(`${name} is correct!`)
    } else {
      alert(`Username is incorrect.`);
      // nav("/login")
    }
    console.log("login");
    console.log(name);
    console.log(email);
    console.log(password);
    const param = { name, email, password };
    // localStorage.setItem('user',param )
    console.log(param);
    setName("");
    setEmail("");
    setPassword("");
    console.log(logStatus);
    if (localLog === true) {
      nav("/");
    }
    // window.location='/'
  };

  return (
    <>
      <Container className="cont">
        <Row>
          <div className="container-Row">
            <form action="" id="loginForm">
              <h2>Login Form </h2>
              <input
                type="text"
                placeholder="Enter User Name"
                value={name}
                onChange={infoName}
                required
              />
              <input
                type="email"
                placeholder="Enter Email"
                onChange={infoEmail}
                value={email}
                required
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={infoPassword}
                value={password}
                required
              />
              <input
                type="password"
                placeholder="ReEnter Password"
                required
              />
              <button type="button" onClick={onPress}>
                Login
              </button>
              <div className="a-style">
                <a href="#" onClick={clearform}>
                  {" "}
                  Forgot Password ?{" "}
                </a>
                <a href="" onClick={register} type="button ">
                  {" "}
                  Register{" "}
                </a>
              </div>
            </form>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Login;


