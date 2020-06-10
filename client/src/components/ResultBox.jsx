import React from 'react';
import axios from 'axios';

class ResultBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodItems: []
        }
        
    }
    componentDidMount() {
        this.getFoodLabel()
      }

    handleError(error) {
        console.log(error);
      }

    getFoodLabel() {
        axios.get('/data/0')
        .then(({ data }) => {
            this.setState({
              foodItems: data,
            });
          })
          .catch(this.handleError);
      }

      sendFoodLabel() {
        axios.post('/data/0')
        .then(({ data }) => {
            this.setState({
              foodItems: data,
            });
          })
          .catch(this.handleError);
      }



    render() {
        // console.log('From Result Box',this.state.foodItems)
            const foods = this.state.foodItems.map((food,i) => {
                return (
                    <div key={i}>
                    <li>{food}</li>
                    </div>
                )
            })

        return (
            <div>
            <h3>Food Ingredients:</h3>
            {foods}
            </div>
        )
    }

}




export default ResultBox;