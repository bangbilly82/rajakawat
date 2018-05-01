import React, { Component } from 'react';

class Button extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickHandler();
  }

  render() {
    const { text, uppercase } = this.props;
    const style = {
      textTransform: (uppercase) ? 'uppercase' : null
    };
    return (
      <button className="button-primary" style={style} onClick={this.handleClick}>
        {text}
      </button>
    );
  }
}

export default Button;
