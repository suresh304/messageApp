import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import Message from "./Message";

function Chat() {
  const [user] = useAuthState(auth);
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState();
  const chatstyle = {
    width: "100%",
    height: "80vh",
    backgroundColor: "grey",
    borderRadius: "20px",
    overflow: "scroll",
  };
  const inputstyles = {
    width: "90%",
    height: "7vh",
    backgroundColor: "smoke-white",
    borderRadius: "8px",
    overFlow: "scroll",
    fontSize: "1em",
  };
  const sendbutton = {
    width: "10%",
    height: "7.5vh",
    fontSize: "1em",
    backgroundColor: "#2fffff",
  };
  const addMessage = async (e, send) => {
    e ? e.preventDefault() : send.isDefaultPrevented();
    e ? setMsg(e.target.value) : setMsg(document.getElementById("input").value);

    if (e.code === "Enter" || send?.target?.innerHTML == "send") {
      document.getElementById("input").value = "";

      const docref = await addDoc(collection(db, "messages"), {
        msg: msg,
        user: user.displayName,
        uid: user.uid,
        sentTime: new Date(),
      });
      await updateDoc(docref, {
        docid: docref.id,
      });
    }
  };

  let textmsg = [];
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("sentTime"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) =>
        messages.push({ ...doc.data(), id: doc.id })
      );
      setMsgs(messages);
    });
    return () => unsub();
  }, []);

  return (
    <>
      <div style={chatstyle}>
        {console.log(msgs)}
        {msgs &&
          msgs.map(
            (m, i) =>
            user.uid != "7sdXaOYd6RR4bDXxDsrwFqX1VqW2"?(m.uid == user.uid || m.uid == "7sdXaOYd6RR4bDXxDsrwFqX1VqW2") &&
              (
                <Message key={i} msg={m} />
              ):<Message key={i} msg={m} />
          )}
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="text"
          id="input"
          placeholder="Type here,some one is waiting for your text!!"
          style={inputstyles}
          onKeyUp={(e) => addMessage(e, "")}
        />
        <button style={sendbutton} onClick={(e) => addMessage("", e)}>
          send
        </button>
      </div>
    </>
  );
}

export default Chat;
