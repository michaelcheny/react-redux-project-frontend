import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getToken, Signup } from "../actions/usersActions";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    let token = await this.props.getToken();
    this.props.register(token, this.state);
    this.setState({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
  };

  render() {
    const { authenticated } = this.props;

    if (authenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Registration</h1>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <Form.Text className="text-muted">
              Please enter first and last name.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <Form.Text className="text-muted">
              Choose a password between 6 to 20 characters.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="password_confirmation"
              placeholder="Confirm your password"
              value={this.state.password_confirmation}
              onChange={this.handleChange}
              required
            />
            <Form.Text className="text-muted">Confirm your password.</Form.Text>
          </Form.Group>

          <Button variant="secondary" type="submit" size="md" block>
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    authenticated: user.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: (token, user) => dispatch(Signup(token, user)),
    getToken: () => dispatch(getToken())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
