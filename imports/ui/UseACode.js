import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import { Links } from '../api/links';

export default class UseACode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            url: '',
            redirect: false
        };
    }
    onSubmit(e) {
        e.preventDefault();

        const code = this.refs.code.value;

        const link = Links.findOne({ code });;

        this.setState({
            code,
            url: link.url,
            redirect: true
        });
    }
    render() {

        const { redirect, url, code } = this.state;

        if (redirect) {
            return <Redirect to={code} />;
        }

        return (
            <div>
                <h1>Amaro Link</h1>

                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="code" id="code-input" placeholder="CODE"/>
                    <button>Go!</button>
                </form>

                <p><Link to="/code">Need a code?</Link></p>

                <h6>0.1.0-alpha2 - Development Release</h6>
            </div>
        );
    }
}
