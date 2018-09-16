import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';

class App extends Component {
    componentWillMount() {
        if (!this.props.auth.uid) {
            console.log('you need to be logged in!');
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    This is my app
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(App);