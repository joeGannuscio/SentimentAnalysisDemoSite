import React from 'react'
import Axios from 'axios';
import './PredictSentiment.css'


class PredictSentiment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            prediction: ''
        };
    }

    onInputChange = event => {
        this.setState({
            input: event.target.value
        });
    }

    onButtonClick = event => {
        const input = {
            Input : this.state.input
        }
        console.log(input)

        Axios.post('https://ml-sa-demo.herokuapp.com/api/prediction', input)
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({
                prediction: res.data
            })
        })
        
    }

    render() {
        return (
            <div>
                <div>
                    <input
                        className = 'form-control'
                        type = 'text'
                        name = 'input'
                        value = {this.input}
                        onChange = {this.onInputChange} />
                    <button 
                        className='btn btn-primary'
                        onClick={this.onButtonClick}>
                        Predict
                    </button>
                </div>    
                <h3>The model thinks the input was </h3>
                <h2>{this.state.prediction}</h2>
            </div>
        )
    }
}

export default PredictSentiment;