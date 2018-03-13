import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './partials/Footer';
import Header from './partials/Header';

export default () => {
    return (
        <div>
            <Header />
                <div>
                    <span>
                        <h3>0.2.0-alpha3</h3>
                        <p>
                            <ul>
                                <li>
                                    Refactored Code
                                </li>
                                <li>
                                    Added controlled inputs
                                </li>
                                <li>
                                    Added changelog page
                                </li>
                                <li>
                                    Moved /code to /getcode
                                </li>
                            </ul>
                        </p>
                    </span>
                    <span>
                        <h3>0.2.0-alpha2</h3>
                        <p>
                            <ul>
                                <li>
                                    Refactored Code
                                </li>
                            </ul>
                        </p>
                    </span>
                    <span>
                        <h3>0.2.0-alpha1</h3>
                        <p>
                            <ul>
                                <li>
                                    Refactored Code
                                </li>
                                <li>
                                    Support for accessing links via form
                                </li>
                            </ul>
                        </p>
                    </span>
                    <span>
                        <h3>0.1.0</h3>
                        <p>
                            <ul>
                                <li>
                                    Removed non-working form for accessing links via form (exp. in next release)
                                </li>
                            </ul>
                        </p>
                    </span>
                    <span>
                        <h3>0.1.0-alpha2</h3>
                        <p>
                            <ul>
                                <li>
                                    Input validation via Simpl-Schema
                                </li>
                                <li>
                                    Redirection via code in url
                                </li>
                            </ul>
                        </p>
                    </span>
                    <span>
                        <h3>0.1.0-alpha1</h3>
                        <p>
                            <ul>
                                <li>
                                    First developer release
                                </li>
                            </ul>
                        </p>
                    </span>
                </div>
            <Footer />
        </div>
    );
}
