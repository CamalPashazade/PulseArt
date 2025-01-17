import { useState } from "react";
import styles from './login.module.css';
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(); 
    setErrors(validationErrors); 

    if (Object.keys(validationErrors).length === 0) {
      alert("done");
    }
  };

  const validate = () => {
    let error = {};

 
    if (!email) {
      error.email = "Please enter email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email format is not valid";
    }

   
    if (!password) {
      error.password = "Please enter password";
    } else if (password.length < 5) {
      error.password = "Password must be at least 5 characters";
    }

    return error;
  };

  return (
    <div className={styles.login}>
      <Link className={styles.gohome} to={"/"}>
        Go to Home Page
      </Link>

      <form className={styles.container} onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className={styles.email_input}>
          {errors.email && <div className={styles.error}>{errors.email}</div>}
          <label>Email address</label>
          <input
            value={email}
            type="text"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            value={password}
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className={styles.error}>{errors.password}</div>}
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => alert("Sign-in clicked")}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
