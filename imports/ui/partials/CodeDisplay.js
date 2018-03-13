import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <p>Your Code: {props.code}</p>
        </div>
    );
}
