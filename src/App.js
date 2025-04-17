import MessageForm from "./components/MessageForm";
import Messages from "./components/Messages";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Tell Rizal What's Wrong</h1>
      <MessageForm />
      <Messages />
      <footer>
        <p>No matter how heavy the storms, or how long the nights — <br />
        I’ll always be there, quietly holding space for your light.</p>
      </footer>
    </div>
  );
}

export default App;
