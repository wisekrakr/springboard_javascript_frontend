import React, { Component } from "react";

import { Nav, Container, Button } from "reactstrap";
import AddProjectTask from "../task/AddProjectTask";

class HeaderBar extends Component {
  render() {
    return (
      <div>
        <Nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
          <Container className="container">
            <a className="navbar-brand" href="Dashboard.html">
              Project Task Tool
            </a>
            <AddProjectTask />
            <Button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </Button>
          </Container>
        </Nav>
      </div>
    );
  }
}

export default HeaderBar;
