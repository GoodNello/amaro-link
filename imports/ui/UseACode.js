import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './partials/Footer';
import Header from './partials/Header';
import UseCodeForm from './partials/Forms/UseCodeForm';

export default () => {
    return (
        <div>
            <Header />

            <UseCodeForm />

            <p><b>Tip:</b> you can add /yourcode to the url in the address bar to directly access your link</p>

            <p><Link to="/getcode">Need a code?</Link></p>

            <Footer />
        </div>
    );
}
