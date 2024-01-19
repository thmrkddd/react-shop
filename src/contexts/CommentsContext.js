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
const axiosInstance = axios.create({ baseURL: COMMENTS_API });

const CommentContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const createComments = async (newComment) => {
    try {
      await axiosInstance.post("", newComment);
      getComments();
    } catch (error) {
      console.error("Ошибка при создании комментария:", error);
    }
  };

  const getComments = async () => {
    try {
      let res = await axiosInstance.get("");
      dispatch({ type: "ADD_COMMENT", payload: res.data });
    } catch (error) {
      console.error("Ошибка при получении комментариев:", error);
    }
  };

  const deleteComments = async (id) => {
    try {
      await axiosInstance.delete(`/${id}`);
      getComments();
    } catch (error) {
      console.error("Ошибка при удалении комментария:", error);
    }
  };

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
