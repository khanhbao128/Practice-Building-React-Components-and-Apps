import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    constructor(props) {
        super(props);

    // THIS IS THE ONLY TIME THAT WE DO DIRETCT ASSIGNEMENT
        this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // We call setState!!!
                this.setState({ lat: position.coords.latitude });
                // we did not do this.state.lat = position.coords.latitude
            }, 
            err => {
                this.setState({ errorMessage: err.message });
            }
        );

    }
    // React says we have to define render
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />

        }

        return <Spinner message="Please accept the location request"/>;
    }  

    render() {
        return (
            <div className='border red'>
                {this.renderContent()})
            </div>
        );
    }
   
        
}

ReactDOM.render(<App />, document.querySelector("#root"));