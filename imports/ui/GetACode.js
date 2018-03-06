import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './partials/Footer';
import Header from './partials/Header';
import Form from './partials/Form';

export default class GetACode extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Form getCode={true} />

                <p><Link to="/">Have a code?</Link></p>

                <Footer />
            </div>
        );
    }
}
