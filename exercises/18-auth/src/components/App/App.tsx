import { useState, ChangeEvent, useEffect } from "react";
// import something here
// import Axios (or use Fetch)
import Home from "../Home/Home";
import axios from 'axios'


function App() {
  /**
   * User input
   */

  type ILoginResponse = {
    token: string;
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Complete all the logging in and logout logic
   */
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async () => {
    try {
      const data = await axios('"http://localhost:7001/api/login"', {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          username: "username",
          password: "password",
        },
      })
      setToken(data.data.token)
    } catch((error) => {
        console.log("error", error);
        if (error.response && error.response.status === 401) {
          setErrorMessage("Invalid username or password");
        } else setErrorMessage("We are sorry, an unexpected error has occured.");
        setIsLoading(false);
      });
    
  });
}

   const handleSubmit = (e) => {
    e.preventDefault();
    login();
   };

  
     

  /**
   * If the user is logged in, you should render the <Home /> component instead.
   */

  if (token) {
    return
  } else {
    return (
      <div className="container mt-2 mb-5">
      {/* <Routes>
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        /> */}
        <h1>Login</h1>
        {/* Handle form submission */}
        <form className="form-inline mb-2" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="mr-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control mr-3"
              required={true}
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="mr-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control mr-3"
              required={true}
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isLoading}>
            Login
          </button>
        </form>
        <p className="form-text">
          <small>
            The username is <em>username</em> and the password is{" "}
            <em>password</em>
          </small>
        </p>
        {isLoading && <p>Loading ...</p>}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    );
  }
}

export default App;
