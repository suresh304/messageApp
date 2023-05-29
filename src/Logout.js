import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Profile from './Profile';

function Logout() {
    const [user]=useAuthState(auth)
    console.log(user)
    const signout=()=>{

signOut(auth).then(() => {
  console.log("hello user sign out")
}).catch((error) => {
  // An error happened.
});
        
}
let interval =setInterval(()=>user&&signOut(auth).then(() => {
  console.log("hello user sign out")
}).catch((error) => {
  // An error happened.
}),1*60*1000)
clearInterval(interval)

  return (
    <>
    {user.displayName}
    <Profile src={user.photoURL}/>
    <button style={{color:"blue",background:"green"}} onClick={signout}>Logout</button>
    </>

  )
}

export default Logout