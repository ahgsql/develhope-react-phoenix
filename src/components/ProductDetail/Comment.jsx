import PropTypes from "prop-types";
import "./comment.css"

const Comment = ({comments}) => {
    return (
        <div id="CommentContainer">
            <h2 style={{textAlign:"start"}}>Comments</h2>
            {comments.map((comment,index) => (
                <div key={index} className="CommentRow">
                    <h3>{comment.userName}</h3>
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
