import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createProject } from "../actions/projectActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class NewProjectPage extends Component {
  state = {
    name: "",
    description: "",
    online: true,
    category: "programming"
  };

  handleSubmit = event => {
    const { token, createProject } = this.props;
    event.preventDefault();
    console.log(this.state);
    createProject(token, this.state);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCategoryChange = event => {
    this.setState({ category: event.target.value });
  };

  render() {
    const { authenticated } = this.props;
    // if (!authenticated) return <Redirect to="/" />;

    return (
      <div>
        <h2>Start a New Project</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Example: Drink More Water App (Open Source)"
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              value={this.state.category}
              onChange={this.handleCategoryChange}
              required
            >
              <option disabled>Select a category</option>
              <option value="automotive">Automotive</option>
              <option value="charity">Charity</option>
              <option value="educational">Educational</option>
              <option value="makers_and_crafting">Makers and Crafting</option>
              <option value="health_and_fitness">Health and Fitness</option>
              <option value="food_and_drink">Food and Drink</option>
              <option value="programming">Programming</option>
              <option value="social_media">Social Media</option>
              <option value="others">Others</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
              required
            />
          </Form.Group>

          <Form.Check
            type="switch"
            id="custom-switch"
            label="Online project"
            checked={this.state.online}
            onClick={() =>
              this.setState(prevState => ({
                online: !prevState.online
              }))
            }
          />

          <Button variant="dark" type="submit" block>
            Post Project
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = ({ user, token }) => {
  const { authenticated } = user;
  // const { token } = token;
  console.log(token);
  return { authenticated, token: token.token };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: (token, project) => dispatch(createProject(token, project))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewProjectPage);
