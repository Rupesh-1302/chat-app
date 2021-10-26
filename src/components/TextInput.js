import React, { Component } from "react";
import "./TextInput.css";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { textValue: "" };
  }

  changeText = (event) => {
    this.setState({ textValue: event.target.value });
  };

  sendMessage = (e) => {
    e.preventDefault();
    this.props.socket.emit("send", this.state.textValue);
    this.props.updateMessageBox({
      messageText: this.state.textValue,
      position: "right",
      user: "You",
    });
    console.log("working");
  };
  render() {
    return (
      <div className="container-sm textbox">
        <form onSubmit={this.sendMessage}>
          <div className="row">
            <div className="col-8 my-3">
              <input
                type="text"
                className="form-control"
                id="chatbox"
                name="text"
                value={this.state.textValue}
                onChange={this.changeText}
              />
            </div>
            <div className="col-4 my-3">
              <div className="d-grid gap-2 col-10 mx-auto">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TextInput;
