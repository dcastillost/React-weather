import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        //This is the only time to do direct assignment to the state
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // Call setState to update the state
                this.setState({ lat: position.coords.latitude });
            },
            err => console.log(err)
        );
    }
    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);