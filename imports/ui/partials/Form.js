import React from 'react';
import PropTypes from 'prop-types';

import { Links } from '../../api/links';
import securePin from 'secure-pin';

import ErrorDisplay from './ErrorDisplay';
import CodeDisplay from './CodeDisplay';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            code: 0
        }
    }
    onSubmit(e) {

        e.preventDefault();

        if (this.props.getCode) {
            const url = this.refs.url.value.trim();

            if (url) {
                const code = securePin.generatePinSync(4);

                Meteor.call('links.insert', code, url);

                this.setState({
                    error: 'Code created.',
                    code
                });

                this.refs.url.value = '';
            }
        }

        if (this.props.useCode) {
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
    }
    render() {
        if (this.props.getCode && !this.props.useCode) { // GET CODE
            return (
                <div>
                    {this.state.error ? <ErrorDisplay error={this.state.error} /> : undefined}
                    {this.state.code ? <CodeDisplay code={this.state.code} /> : undefined}

                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input type="text" ref="url" placeholder="URL"/>
                        <button type="submit">Go!</button>
                    </form>

                    <p><b>Note:</b> as of now you need to prepend http, https or ftp to your url</p>

                </div>
            );
        }
        else if (this.props.useCode && !this.props.getCode) { // USE CODE
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
        else
            return (
                <ErrorDisplay error="Can't display form"/>
            );
    }
}

Form.defaultProps = {
    getCode: false,
    useCode: false
}
