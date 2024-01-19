import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";
const commentContext = createContext();
export const useComment = () => useContext(commentContext);
const INIT_STATE = {
  comment: [],
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return { ...state, comment: action.payload };
    default:
      return state;
  }
}
const COMMENTS_API = "http://localhost:8000/comments";

const CommentContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function createComments(newComment) {
    try {
      await axios.post(`${COMMENTS_API}`, newComment);
      getComments();
    } catch (error) {
      console.error("Ошибка при создании комментария:", error);
    }
  }

  async function getComments() {
    let res = await axios(COMMENTS_API);
    dispatch({ type: "ADD_COMMENT", payload: res.data });
  }
  async function deleteComments(id) {
    await axios.delete(`${COMMENTS_API}/${id}`);
    getComments();
  }
  const values = {
    createComments,
    getComments,
    deleteComments,
    comment: state.comment,
  };
  return (
    <commentContext.Provider value={values}>{children}</commentContext.Provider>
  );
};

export default CommentContext;
