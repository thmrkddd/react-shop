import React, { useEffect, useState } from "react";
import "./Comments.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useComment } from "../../contexts/CommentsContext";
import { Avatar, Tooltip } from "@mui/material";
import { ADMIN_USERS } from "../helpers/const";
const Comments = () => {
  const { user } = useAuth();
  const { createComments, getComments, deleteComments, comment } = useComment();
  const navigate = useNavigate();

  const checkUser = () => {
    user ? navigate("/testi") : navigate("/login");
  };

  const handleDeleteClick = (id) => {
    deleteComments(id);
  };

  const [isComment, setIsComment] = useState("");

  const handleSave = () => {
    checkUser();
    const newComment = {
      isComment,
      timestamp: new Date().toISOString(),
    };
    if (!isComment.trim()) {
      return;
    } else {
      createComments(newComment);
      setIsComment("");
    }
  };

  useEffect(() => {
    async function fetchComments() {
      try {
        await getComments();
      } catch (error) {
        console.error("Ошибка при загрузке комментариев:", error);
      }
    }
    fetchComments();
  }, []);

  return (
    <div className="container">
      <div className="path">
        <p onClick={() => navigate("/")} className="cursor-pointer">
          Главная
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.64645 5.64645C8.84171 5.45118 9.15829 5.45118 9.35355 5.64645L15.3536 11.6464C15.5488 11.8417 15.5488 12.1583 15.3536 12.3536L9.35355 18.3536C9.15829 18.5488 8.84171 18.5488 8.64645 18.3536C8.45118 18.1583 8.45118 17.8417 8.64645 17.6464L14.2929 12L8.64645 6.35355C8.45118 6.15829 8.45118 5.84171 8.64645 5.64645Z"
            fill="#414141"
          />
        </svg>
        <p className="cursor-pointer">Комментарии</p>
      </div>
      <div className="comments__form">
        <input
          type="text"
          placeholder="Ваш комментарий..."
          onChange={(e) => setIsComment(e.target.value)}
          value={isComment}
        />
        <button onClick={handleSave}>Отправить</button>
      </div>
      <h1>Комментарии</h1>
      <div className="comments__container">
        {comment.map((elem1) => (
          <div className="comment__card" key={elem1.id}>
            {user && ADMIN_USERS.some((elem) => elem.email === user.email) && (
              <div
                onClick={() => handleDeleteClick(elem1.id)}
                className="delete-button"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                ></svg>
              </div>
            )}

            <div className="comment__avatar">
              <Tooltip title={user.email}>
                <Avatar alt={user.displayName} src={user.photoUrl} />
              </Tooltip>
              <span>{user.email}</span>
            </div>
            <div>
              <p>{elem1.isComment}</p>
              <p className="comment-timestamp">
                {new Date(elem1.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
