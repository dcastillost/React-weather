import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
    //Use this method for one time setup
    constructor(props) {
        super(props);
        //This is the only time to do direct assignment to the state
        this.state = { lat: null, errorMessage: '' };
    }

    // Alternate method to initialize state
    // state = { lat: null, errorMessage: '' };

    //Use this method to load data
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // Call setState to update the state
                this.setState({ lat: position.coords.latitude });
            },
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        else if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        else {
            return <Spinner message="Waiting for location data" />
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);