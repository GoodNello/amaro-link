import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link, Redirect } from 'react-router-dom';

import { Links } from '../api/links';
import Footer from './partials/Footer';

export default class UseACode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();

        const code = this.refs.code.value;

        const link = Links.findOne({ code });;

        if (link) {
            window.location.href = link.url;
        } else {
            this.setState({
                error: 'Sorry, wrong code.'
            });
        }

        this.refs.code.value = '';
    }
    render() {
        return (
            <div>
                <h1>Amaro Link</h1>

                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                     <input
                        type="text"
                        ref="code"
                        id="code-input"
                        maxLength="4"
                        placeholder="CODE"/>
                     <button>Go!</button>
                 </form>

                <p><b>Tip:</b> you can add /yourcode to the url in the address bar to directly access your link</p>

                <p><Link to="/code">Need a code?</Link></p>

                <Footer />
            </div>
        );
    }
}
