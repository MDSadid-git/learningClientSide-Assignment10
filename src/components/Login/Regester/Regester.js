import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../UserContext/UserContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const Regester = () => {
  const [merror, setError] = useState("");
  const {
    googleUserRegister,
    gitUserRegister,
    newUserRegister,
    userProfileUpDate,
  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from2 = location.state?.from?.pathname || "/";
  const handleFrom = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    newUserRegister(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        toast.success("Please verify your email address.");
        navigate(from2, { replace: true });
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };
  const UserGoogle = () => {
    googleUserRegister(googleProvider)
      .then((resul) => {
        const user = resul.user;
        console.log(user);
        navigate(from2, { replace: true });
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
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    userProfileUpDate(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="text-start mt-5">
      <Form onSubmit={handleFrom}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Text className="text-muted">{merror}</Form.Text>
        <div className="mt-2">
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
        </div>
      </Form>
    </div>
  );
};

export default Regester;
