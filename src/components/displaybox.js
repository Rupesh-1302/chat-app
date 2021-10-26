import React, { Component } from "react";
import "./displaybox.css";
import MessageText from "./messageText";

class Displaybox extends Component {
  constructor(props) {
    super(props);
    this.messageList = [];
  }
  render() {
    this.messageList = this.props.messageList.map((message, index) => {
      return <MessageText key={index} message={message} />;
    });
    return <div className="container-sm mainbox">{this.messageList}</div>;
  }
}

export default Displaybox;
