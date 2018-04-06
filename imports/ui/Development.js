import React from "react";
import { Link } from "react-router-dom";

import Footer from "./partials/Footer";
import Header from "./partials/Header";

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <Header />
        <div className="boxed-view_box_list">
          <span>
            <p>
              Amaro Link is still under development and its database may be
              resetted without notice.
            </p>
            <p>
              Slowness and crashing may occur when using development releases.
            </p>
          </span>
          <span>
            <h3>General</h3>
            <ul>
              <li>Support for users is expected in the final release.</li>
              <li>
                To avoid publishing the entire database to the client, the async
                call to Links.find() in the UseCode page has been removed,
                resulting in processing the inputted code only via server. This
                will sure slow down the UX and will be fixed with the
                introduction of user accounts.
              </li>
            </ul>
          </span>
          <span>
            <h3>Mobile</h3>
            <ul>
              <li>
                There are some graphical issues with devices with a screen
                smaller than 6''.
              </li>
            </ul>
          </span>
        </div>
        <Footer showLess={true} />
      </div>
    </div>
  );
};
