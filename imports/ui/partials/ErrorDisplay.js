import React from 'react';

export default (props) => {
    return (
        <div className="error__message">
            <p>{props.error}</p>
        </div>
    );
}
