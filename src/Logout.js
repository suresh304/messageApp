import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Profile from './Profile';

function Logout() {
    const [user]=useAuthState(auth)
    const signout=()=>{

signOut(auth).then(() => {
  console.log("hello user sign out")
}).catch((error) => {
  // An error happened.
});
        
    }
  return (
    <>
    {user.displayName}
    <Profile src={user.photoURL}/>
    <button style={{color:"blue",background:"green"}} onClick={signout}>Logout</button>
    </>

  )
}

export default Logout