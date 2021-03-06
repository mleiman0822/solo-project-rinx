import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
import LoginForm from "../LoginForm/LoginForm";
import { Button } from "react-bootstrap";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <br />
        <h2 style={{ color: "white" }}>Need an Account?</h2>
        <center>
          <Button
            variant="info"
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push("/registration");
            }}
          >
            Register
          </Button>
        </center>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
