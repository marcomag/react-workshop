import React from 'react';
// import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

// import child component
import Card from './Card';
import Actionbar from './Actionbar'

class App extends React.Component {
    constructor(props) {
        super(props); // If there is a constructor present in sub-class, it needs to first call super() before using "this"

        // props are read only!
        // Triggers -> Cannot assign to read only property 'name' of object '#<Object>'
        // this.props.photos = 'something';

        // set initial state
        this.state = {
            'page': 1,
            'pageSize': 20,
            'currentPage': this.props.photos.slice(0, 20)
        };

        this.changeCurrentPage = this.changeCurrentPage.bind(this);
        this.pageSelectorChange = this.pageSelectorChange.bind(this);
        this.pageSizeSelectorChange = this.pageSizeSelectorChange.bind(this);
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.currentPage !== this.state.currentPage;
    // };

    pageSelectorChange(event) {
        this.setState({ 'page': event.target.value });
    };

    pageSizeSelectorChange(event) {
        this.setState({ 'pageSize': event.target.value });
    };

    changeCurrentPage() {
        const currentPage = this.props.photos.slice(((this.state.page - 1) * this.state.pageSize), (this.state.page * this.state.pageSize));
        
        // change state triggers render
        this.setState({
            'currentPage': currentPage
        });
    };

    getCards() {
        return this.state.currentPage.map(function(photo) {
            return <Card key={photo.id.toString()} data={photo} />
        });
    };

    render() {
        
        console.log('render');

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Boozt React Workshop</h2>
                </div>
                <div className="App-actionbar">
                    <Actionbar 
                        changeCurrentPage={this.changeCurrentPage}
                        pageSelectorChange={this.pageSelectorChange}
                        pageSizeSelectorChange={this.pageSizeSelectorChange}
                    />
                </div>
                <div className="App-intro">
                    {this.getCards()}
                </div>
            </div>
        );
    };
}

// Typechecking
// App.propTypes = {};

export default App;