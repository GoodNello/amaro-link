import React from 'react';
import { Link } from 'react-router-dom';

export default class CodeDisplay extends React.Component {
    render() {
        return (
            <div>
                <p>Your Code: {this.props.code}</p>
                <p>It will expire in 20 minutes</p>
            </div>
        );
    }
}
