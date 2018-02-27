import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
import { Links } from '../api/links';

export default class UseACode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();

        const code = this.refs.code.value;

        const link = Links.findOne({code});

        this.setState({
            url: link.url
        });
    }
    render() {
        return (
            <div>
                <h1>Amaro Link</h1>

                {this.state.url ? <p>{this.state.url}</p> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="code" id="code-input" placeholder="CODE"/>
                    <button>Go!</button>
                </form>

                <p><Link to="/code">Need a code?</Link></p>

                <h6>0.1.0 - Development Release</h6>
            </div>
        );
    }
}
