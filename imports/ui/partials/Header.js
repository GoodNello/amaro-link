import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="header">
            <h1><Link to="/">Amaro Link</Link></h1>
        </div>
    );
}
