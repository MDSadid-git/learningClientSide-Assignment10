import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../UserContext/UserContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const Regester = () => {
  const { googleUserRegister, gitUserRegister, newUserRegister } =
    useContext(AuthContext);
  const handleFrom = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    newUserRegister(email, password)
      .then((resul) => {
        const user = resul.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
    console.log(email, password);
    from.reset();
  };
  const UserGoogle = () => {
    googleUserRegister(googleProvider)
      .then((resul) => {
        const user = resul.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  const UserGit = () => {
    gitUserRegister(gitProvider)
      .then((resul) => {
        const user = resul.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="text-start mt-5">
      <Form onSubmit={handleFrom}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" name="photourl" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
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
      </Form>
    </div>
  );
};

export default Regester;
