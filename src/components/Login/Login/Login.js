import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../UserContext/UserContext";

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { googleUserRegister, gitUserRegister, logInUser } =
    useContext(AuthContext);
  const [merror, setError] = useState("");
  const handleFrom = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };
  const from2 = location.state?.from?.pathname || "/";
  const UserGoogle = () => {
    googleUserRegister(googleProvider)
      .then((resul) => {
        const user = resul.user;
        navigate(from2, { replace: true });
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  const UserGit = () => {
    gitUserRegister(gitProvider)
      .then((resul) => {
        const user = resul.user;
        console.log(user);
        navigate(from2, { replace: true });
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="text-start mt-5">
      <Form onSubmit={handleFrom}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Text className="text-muted">{merror}</Form.Text>
        <div>
          <Button variant="primary" type="submit">
            Log in
          </Button>
          <Button
            onClick={UserGoogle}
            variant="info"
            className="mx-2"
            title="Sing in With google"
          >
            <FaGoogle />
          </Button>
          <Button onClick={UserGit} variant="info" title="Sing in With git">
            <FaGithub />
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
