import React from "react";


class PlayerPoints extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            points: 100,
            bet: 0,
        } 
    }
    wager = 0
    
    handleClick = () => {
        this.setState({bet: this.wager += 1 });
    };
    
    render() {
        return (  
            <div>   
            Player Points:       
            {this.state.points}
        <br/>
            Bet Points:
            <button onClick={this.handleClick}>Click me</button>
            {this.state.bet} 
        </div>
        );
    
                
           
        
        
      }
};

export default PlayerPoints;