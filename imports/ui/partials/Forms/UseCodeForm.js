import React from 'react';

import { Links } from '../../../api/links';

import ErrorDisplay from './../ErrorDisplay';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 0,
            error: ''
        }
    }
    onSubmit(e) {

        e.preventDefault();

        const code = this.refs.code.value.trim();

        const link = Links.findOne({ code });

        if (link) {
            window.location.href = link.url;
        } else {
            this.setState({
                error: 'Sorry, wrong code.'
            });
        }

        this.refs.code.value = '';
    }
    onChange(e) {
        this.setState({
            url: e.target.value.trim()
        });
    }
    render() {
        return (
            <div>
                {this.state.error ? <ErrorDisplay error={this.state.error} /> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                     <input
                        type="text"
                        ref="code"
                        id="code-input"
                        maxLength="4"
                        placeholder="CODE"/>
                     <button>Go!</button>
                 </form>
            </div>
        );
    }
}
