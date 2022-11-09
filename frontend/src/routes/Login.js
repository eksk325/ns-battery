import styles from "../styles/Admin.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (username == "raehan" && password == "8114") {
      navigate("/raehan-login");
    }
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <div className={styles.form}>
        <label>Username:</label>
        <input
          type="text"
          onChange={changeUsername}
          value={username}
          placeholder="Enter username"
          name="username"
          spellCheck="false"
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          onChange={changePassword}
          value={password}
          placeholder="Enter password"
          name="password"
          required
        />
      </div>
      <button className={styles.button}>Login</button>
    </form>
  );
}

export default Login;
