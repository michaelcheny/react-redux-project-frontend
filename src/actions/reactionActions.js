import { ADD_REACTION, DELETE_REACTION } from "./actionTypes";

export const createReaction = (projectId, token) => {
  return async dispatch => {
    try {
      const res = await fetch("http://localhost:3001/api/v1/reactions", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token
        },
        body: JSON.stringify({
          like: "1",
          projectId
        }),
        credentials: "include"
      });
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      dispatch({ type: ADD_REACTION, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deleteReaction = (token, reactionId) => {
  return async dispatch => {
    try {
      const res = await fetch(
        `http://localhost:3001/api/v1/reactions/${reactionId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": token
          },
          credentials: "include"
        }
      );
      if (!res.ok) {
        throw res;
      }
      const data = await res.json();
      dispatch({ type: DELETE_REACTION, payload: data.id });
    } catch (error) {
      console.log(error.message);
    }
  };
};
