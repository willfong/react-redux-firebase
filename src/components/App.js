import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';

class App extends Component {
    state = { inputText: '' }

    componentWillMount() {
        if (!this.props.auth.uid) {
            console.log('you need to be logged in!');
            console.log(this.props);
            //this.props.history.push('/');
        }
        this.props.dataSelect();
    }

    _addData = () => {
        console.log(this.state.inputText);
        this.props.dataInsert(this.props.auth.uid, this.state.inputText);
    }

    _renderList = () => {
        return  _.map(this.props.data, (value, key) => {
            return <li className="list-group-item" key={key}>{value.data}</li>
        });
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <form className="form-inline">
                        <div className="form-group mb-2">
                            <label className="sr-only">Say Something</label> 
                            <input 
                                type="text" 
                                className="form-control-plaintext" 
                                id="messageText" 
                                placeholder="Hello world!" 
                                value={this.state.inputText}
                                onChange={e => this.setState({inputText: e.target.value})}
                                />
                        </div>
                        <button className="btn btn-primary mb-2" onClick={this._addData}>Post</button>
                    </form>    
                </div>
                <div>
                    <ul className="list-group">
                        {this._renderList()}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        data: state.data
    }
}

export default connect(mapStateToProps, actions)(App);