import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../UserContext/UserContext";

const googleProvider = new GoogleAuthProvider();
const Login = () => {
  const { googleUserRegister } = useContext(AuthContext);
  const handleFrom = () => {};
  const UserGoogle = (provider) => {
    googleUserRegister(googleProvider)
      .then((resul) => {
        const user = resul.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="text-start mt-5">
      <Form>
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
        <Button variant="info" title="Sing in With git">
          <FaGithub />
        </Button>
      </Form>
    </div>
  );
};

export default Login;
