import PropTypes from "prop-types";
import "./comment.css";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

const Comment = ({ comments }) => {
  return (
    <div id="CommentContainer">
      <h2 style={{ textAlign: "start" }}>Comments</h2>
      {comments.map((comment, index) => (
        <div key={index} className="CommentRow">
          <h3>
            {comment.userName}{" "}
            <small style={{ fontWeight: "normal", fontSize: "13px" }}>
              {timeAgo.format(new Date(comment.createdAt))}
            </small>
          </h3>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

Comment.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default Comment;
