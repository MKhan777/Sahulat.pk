import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import "../CSS/error_page.css";
class Error extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>
                4
                <span
                  style={{ backgroundImage: "url('images/error/emoji.png')" }}
                />
                4
              </h1>
            </div>
            <h2>Oops! Page Not Be Found</h2>
            <p>
              Sorry but the page you are looking for does not exist, have been
              removed. name changed or is temporarily unavailable
            </p>
            {/* <a href="/">Back to homepage</a> */}
            <Link to="/">Back to homepage</Link>
          </div>
        </div>
      </Switch>
    );
  }
}

export default Error;
