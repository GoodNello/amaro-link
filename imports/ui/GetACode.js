import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './partials/Footer';
import Header from './partials/Header';
import GetCodeForm from './partials/Forms/GetCodeForm';

export default () => {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <Header />

                <GetCodeForm />

                <p><Link to="/" className="button button--link">Have a code?</Link></p>

                <Footer />
            </div>
        </div>
    );
}
