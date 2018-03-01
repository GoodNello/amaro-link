import React from 'react';
import { Link } from 'react-router-dom';
import securePin from 'secure-pin';

import { Links } from '../api/links';
import CodeDisplay from './CodeDisplay';

export default class GetACode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 0
        };
    }
    onSubmit(e) {
        const url = this.refs.url.value.trim();

        e.preventDefault();

        if (url) {
            const code = securePin.generatePinSync(4);

            Meteor.call('links.insert', code, url);

            this.setState({
                code
            });

            this.refs.url.value = '';
        }
    }
    render() {
        return (
            <div>
                <h1>Amaro Link</h1>

                {this.state.code ? <CodeDisplay code={this.state.code} /> : undefined}

                <div>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input type="text" ref="url" placeholder="URL"/>
                        <button type="submit">Go!</button>
                    </form>
                </div>

                <p><Link to="/">Have a code?</Link></p>

                <h6>0.1.0-alpha2 - Development Release</h6>
            </div>
        );
    }
}
