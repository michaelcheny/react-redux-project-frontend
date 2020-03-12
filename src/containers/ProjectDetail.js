import React, { Component } from "react";
import { connect } from "react-redux";
import CommentForm from "../components/CommentForm";
import Comments from "../components/Comments";
import { createComment } from "../actions/commentActions";

class ProjectDetail extends Component {
  state = {
    project: []
  };

  componentDidMount() {
    this.fetchProject();
  }

  fetchProject = async () => {
    const { id } = this.props.match.params;
    const res = await fetch(`http://localhost:3001/api/v1/projects/${id}`);
    const data = await res.json();
    console.log(data);
    this.setState({
      project: data
    });
    // shove this data into the state and make a show detail page YEEEEEET
  };

  render() {
    console.log(this.state.project);
    const { project } = this.state;

    return (
      <div>
        {project.name}
        {project.description}
        <CommentForm
          projectId={project.id}
          token={this.props.token}
          addComment={this.props.addComment}
        />
        <br />
        MAKE THIS SHIT RERENDER MAYBE USE REDUX TO STORE THIS STATE AND STUFF
        <Comments comments={project.comments} />
      </div>
    );
  }
}

const mapStateToProps = ({ projects, token }) => {
  return {
    projects,
    token: token.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: (id, token, comment) =>
      dispatch(createComment(id, token, comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);