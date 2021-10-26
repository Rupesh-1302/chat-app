import "./App.css";
import React, { Component } from "react";
import Displaybox from "./components/displaybox";
import TextInput from "./components/TextInput";
import { io } from "socket.io-client";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = io("http://localhost:8000", {
      transports: ["websocket", "polling", "flashsocket"],
    });
    this.state = {
      messages: [],
    };
  }
  handleMessages = (newMessage) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, newMessage],
    }));
  };
  componentDidMount() {
    this.nameOfUser = prompt("enter your name");
    this.socket.emit("new-user-enter", this.nameOfUser);
    this.socket.on("new-user", (user) => {
      this.handleMessages({
        messageText: `${user.name} enter the chat`,
        position: "center",
        user: "",
      });
    });
    this.socket.on("recieve", (message) => {
      this.handleMessages(message);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to MyChat</h1>
        <Displaybox messageList={this.state.messages} />
        <TextInput
          socket={this.socket}
          updateMessageBox={this.handleMessages}
        />
      </div>
    );
  }
}

export default App;
