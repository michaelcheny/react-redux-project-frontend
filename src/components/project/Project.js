import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import moment from "moment";

const Project = ({ id, name, description, users, addedOn, category }) => {
  const addDate = moment(addedOn).format("MMM DD, YYYY - h:mma");

  const renderCollaborators = () => {
    return (
      <ul>
        Collaborators:
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <br />
      <Card>
        <Card.Header>{category}</Card.Header>
        <Card.Body>
          <Card.Title>
            <Link to={`projects/${id}`}>{name}</Link>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="dark">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          {renderCollaborators()}
        </Card.Footer>
      </Card>
    </>
  );
};

export default Project;
