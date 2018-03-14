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
                            <h3>0.2</h3>
                            <ul>
                                <li>
                                    <b>.3</b> Fixed pin input not working correctly
                                </li>
                                <li>
                                    <b>.2</b> Fixed security issues
                                </li>
                                <li>
                                    <b>.1</b> Preparation for Heroku deployment
                                </li>
                                <li>
                                    <b>.0</b> Fixed styling issues
                                </li>
                                <li>
                                    <b>.0</b> Added pages for development and how to use
                                </li>
                                <li>
                                    <b>.0-alpha4</b> Styled components
                                </li>
                                <li>
                                    <b>.0-alpha4</b> Added pin input boxes thanks to <a href="https://github.com/arunghosh/react-pin-input">react-pin-input</a>
                                </li>
                                <li>
                                    <b>.0-alpha3</b> Refactored code
                                </li>
                                <li>
                                    <b>.0-alpha3</b> Added controlled inputs
                                </li>
                                <li>
                                    <b>.0-alpha3</b> Added changelog page
                                </li>
                                <li>
                                    <b>.0-alpha3</b> Moved /code to /getcode
                                </li>
                                <li>
                                    <b>.0-alpha2</b>Refactored code
                                </li>
                                <li>
                                    <b>.0-alpha1</b>Refactored code
                                </li>
                                <li>
                                    <b>.0-alpha1</b>Support for accessing links via form
                                </li>
                            </ul>
                        </span>
                        <span>
                            <h3>0.1</h3>
                            <ul>
                                <li>
                                    <b>.0</b> Removed non-working form for accessing links via form (exp. in next release)
                                </li>
                                <li>
                                    <b>.0-alpha2</b> Input validation via <a href="https://github.com/aldeed/meteor-simple-schema">simpl-schema</a>
                                </li>
                                <li>
                                    <b>.0-alpha2</b> Redirection via code in url
                                </li>
                                <li>
                                    <b>0-alpha1</b> First developer release
                                </li>
                            </ul>
                        </span>
                    </div>
                <Footer />
            </div>
        </div>
    );
}
