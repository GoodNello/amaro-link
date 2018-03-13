import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './partials/Footer';
import Header from './partials/Header';

export default () => {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <Header />

                <h2>404</h2>

                <p>We are unable to find that page.</p>

                <p><Link to="/">Go back home?</Link></p>

                <Footer />
            </div>
        </div>
    );
}
