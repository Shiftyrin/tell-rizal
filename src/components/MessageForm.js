// src/components/MessageForm.js
import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function MessageForm() {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim()) {
      await addDoc(collection(db, "messages"), {
        text,
        createdAt: serverTimestamp(),
      });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>What's on Your Mind?</h2>
      <textarea
        placeholder="Share your thoughts..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input"
      />
      <button type="submit" className="button">Send Message</button>
    </form>
  );
}
