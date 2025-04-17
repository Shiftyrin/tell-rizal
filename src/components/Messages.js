import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function Messages() {
  const [inputPass, setInputPass] = useState("");
  const [allowed, setAllowed] = useState(false);
  const [messages, setMessages] = useState([]);

  const PASSWORD = "your-password"; // change this

  const unlock = () => {
    if (inputPass === PASSWORD) {
      setAllowed(true);
    } else {
      alert("Wrong password");
    }
  };

  useEffect(() => {
    if (!allowed) return;

    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map((doc) => doc.data().text);
      setMessages(newMessages);
    });

    return () => unsubscribe(); // cleanup when component unmounts
  }, [allowed]);

  return (
    <div className="form">
      <h2>View Messages</h2>
      {!allowed ? (
        <>
          <input
            type="password"
            value={inputPass}
            onChange={(e) => setInputPass(e.target.value)}
            className="input"
          />
          <button onClick={unlock} className="button">Unlock</button>
        </>
      ) : (
        <ul className="messages">
          {messages.map((msg, i) => (
            <li key={i} className="message">{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

