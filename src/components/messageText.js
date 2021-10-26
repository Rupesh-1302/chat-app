import React, { Component } from "react";

class MessageText extends Component {
  render() {
    console.log(this.props.message);
    return (
      <div className={this.props.message.position}>
        <p className="messageText">
          {this.props.message.user
            ? `${this.props.message.user}:${this.props.message.messageText}`
            : `${this.props.message.messageText}`}
        </p>
      </div>
    );
  }
}

export default MessageText;
