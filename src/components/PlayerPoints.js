import React from "react";


class PlayerPoints extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            points: 100,
        } 
    }

    render() {
        return (
          <div>
           
            {this.state.points}
            
          </div>
        );
      }
};

export default PlayerPoints;