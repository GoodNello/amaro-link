import React from 'react';
import { Link } from 'react-router-dom';
import PinInput from 'react-pin-input';

import { Links } from '../api/links';

import Footer from './partials/Footer';
import Header from './partials/Header';
import UseCodeForm from './partials/Forms/UseCodeForm';
import ErrorDisplay from './partials/ErrorDisplay';

export default class UseACode extends React.Component {
    constructor() {
        super();
        this.state = {
            error: ''
        };
    }
    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <Header />

                        {this.state.error ? <ErrorDisplay error={this.state.error} /> : undefined}

                        <PinInput
                          length={4}
                          type="numeric"
                          ref="code"
                          onComplete={(value, index) => {

                              const link = Links.findOne({ code: value });

                              if (link) {
                                  window.location.href = link.url;
                              } else {
                                  this.setState({
                                      error: 'Sorry, wrong code.'
                                  });
                                  this.refs.code.clear();
                              }
                          }}
                         />

                        <p><b>Tip:</b> you can add /yourcode to the url in the address bar to directly access your link</p>

                        <p><Link to="/getcode" className="button button--link">Need a code?</Link></p>

                    <Footer />
                </div>
            </div>
        );
    }
}
