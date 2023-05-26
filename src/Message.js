import { async } from "@firebase/util";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";

function Message({ msg }) {
  const [user] = useAuthState(auth);

  const sendMsgStyles = {
    backgroundColor: "white",
    color: "black",
    width: "45%",
    margin: "10px",
    borderRadius: "5px",
    marginLeft: "55%",
  };
  const recieveMsgStyles = {
    backgroundColor: "lightblue",
    color: "black",
    width: "45%",
    margin: "10px",
    borderRadius: "5px",
    marginRight: "55%",
  };

  const deleteMessage = async (id) => {
    await deleteDoc(doc(db, "messages", id));
  };
  return (
    <div
      style={msg.uid == user.uid ? sendMsgStyles : recieveMsgStyles}
      onDoubleClick={() => msg.uid == user.uid&&deleteMessage(msg.docid)}
    >
      {msg.msg}
      <p style={{ fontSize: "10px", marginLeft: "50px" }}>{msg.user}</p>
    </div>
  );
}

export default Message;
