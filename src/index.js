import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        //This is the only time to do direct assignment to the state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // Call setState to update the state
                this.setState({ lat: position.coords.latitude });
            },
            err => this.setState({ errorMessage: err.message })
        );
    }
    render() {
        if (this.state.lat && !this.state.errorMessage) {
            return <div>Latitude: {this.state.lat}</div>
        }
        else if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        else {
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);