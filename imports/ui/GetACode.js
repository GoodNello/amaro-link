import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './partials/Footer';
import Header from './partials/Header';
import GetCodeForm from './partials/Forms/GetCodeForm';

export default () => {
    return (
        <div>
            <Header />

            <GetCodeForm />

            <p><Link to="/">Have a code?</Link></p>

            <Footer />
        </div>
    );
}
