import React from 'react';

export default class ErrorDisplay extends React.Component{
    render() {
        return (
            <div>
                {this.props.error}
            </div>
        );
    }
}
