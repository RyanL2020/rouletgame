// component that randomizes numbers from 0-9
import React from "react";

class SlotTwo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        random: null,
      }
    }
  
    min = 0;
    max = 10;
  
    handleClick = () => {
      this.setState({random: this.min + (Math.floor(Math.random() * (this.max - this.min)))});
    };
  
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click me</button>
          {this.state.random}
        </div>
      );
    }
  }

export default SlotTwo; 