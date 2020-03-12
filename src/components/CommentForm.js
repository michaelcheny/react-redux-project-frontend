import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CommentForm = ({ projectId, token, addComment }) => {
  // console.log(addComment);
  const [content, setContent] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(content);
    addComment(projectId, token, content);
    setContent("");
  };

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Leave a comment:</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          value={content}
          onChange={event => setContent(event.target.value)}
        />
        <Button
          className="button"
          variant="dark"
          type="submit"
          onClick={handleSubmit}
        >
          Post comment
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CommentForm;