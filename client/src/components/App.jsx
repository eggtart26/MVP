import React from 'react';
import Input from './Input.jsx';
import ResultBox from './ResultBox.jsx';
import Video from './Video.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFood: false,
            foodItems: [], //fake ["apple","chicken"]
        }
        this.refreshPage = this.refreshPage.bind(this)
    }
    
refreshPage() {
    window.location.reload(false);
  }

    render() {
        if(this.state.foodItems !== []) {
            console.log('fooditeem',this.state.foodItems)
            return (
                <div className="main">
                

                <div className="mainChild1">
                <Input 
                isFood={this.state.isFood}
                foodItems={this.state.foodItems}
                />
                <ResultBox foodItems={this.state.foodItems}/>
                </div>
         



                <button onClick={this.refreshPage}>Detect Items</button>
                <div className="mainChild2">
                <Video />
                </div>
               
    
                </div>
            )
        }

    }
} 


export default App;
