import React from "react";
import SignIn from "./SignIn";
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "./firebase";
import Logout from "./Logout";


function Navbar() {
  const [user] = useAuthState(auth)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <h1>Musical9</h1>
{!user?<SignIn />:<Logout/>}
    </div>
  );
}

export default Navbar;
