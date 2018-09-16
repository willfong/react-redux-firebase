import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HeaderAuth extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-light">Console</button>
                <button type="button" className="btn btn-light" onClick={this.props.authSignOut}>Logout</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}
export default connect(mapStateToProps, actions)(HeaderAuth);