import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../firebaseConfig";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/225px-2021_Facebook_icon.svg.png"></img>
        <img
          src="http://logok.org/wp-content/uploads/2014/10/Facebook-wordmark.png"
          alt=""
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
