import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './partials/Footer';
import Header from './partials/Header';

export default () => {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <Header />
                    <div className="boxed-view_box_list">
                        <span>
                            <h3>0.2.2</h3>
                            <ul>
                                <li>
                                    Fixed security issues
                                </li>
                            </ul>
                        </span>
                        <span>
                            <h3>0.2.1</h3>
                            <ul>
                                <li>
                                    Preparation for Heroku deployment
                                </li>
                            </ul>
                        </span>
                        <span>
                            <h3>0.2.0</h3>
                            <ul>
                                <li>
                                    Fixed styling issues
                                </li>
                                <li>
                                    Added pages for development and how to use
                                </li>
                            </ul>
                        </span>
                        <span>
                            <h3>0.2.0-alpha4</h3>
                            <ul>
                                <li>
                                    Styled components
                                </li>
                                <li>
                                    Added pin input boxes thanks to <a href="https://github.com/arunghosh/react-pin-input">react-pin-input</a>
                                </li>
                            </ul>
                        </span>
                        <span>
                            <h3>0.2.0-alpha3</h3>
                            <ul>
                                <li>
                                    Refactored code
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
                        </span>
                        <span>
                            <h3>0.2.0-alpha2</h3>
                            <ul>
                                <li>
                                    Refactored code
                                </li>
                            </ul>
                        </span>
                        <span>
                            <h3>0.2.0-alpha1</h3>
                            <ul>
                                <li>
                                    Refactored code
                                </li>
                                <li>
                                    Support for accessing links via form
                                </li>
                            </ul>
                        </span>
                        <span>
                            <h3>0.1.0</h3>
                            <ul>
                                <li>
                                    Removed non-working form for accessing links via form (exp. in next release)
                                </li>
                            </ul>
                        </span>
                        <span>
                            <h3>0.1.0-alpha2</h3>
                            <ul>
                                <li>
                                    Input validation via <a href="https://github.com/aldeed/meteor-simple-schema">simpl-schema</a>
                                </li>
                                <li>
                                    Redirection via code in url
                                </li>
                            </ul>
                        </span>
                        <span>
                            <h3>0.1.0-alpha1</h3>
                            <ul>
                                <li>
                                    First developer release
                                </li>
                            </ul>
                        </span>
                    </div>
                <Footer />
            </div>
        </div>
    );
}
