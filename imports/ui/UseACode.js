import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './partials/Footer';
import Header from './partials/Header';
import Form from './partials/Form';

export default class UseACode extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Form useCode={true} />

                <p><b>Tip:</b> you can add /yourcode to the url in the address bar to directly access your link</p>

                <p><Link to="/code">Need a code?</Link></p>

                <Footer />
            </div>
        );
    }
}
