import {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import "./comment.css"

const Comment = ({productId, userId}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Fetch comments related to the specified product and user from your backend API.
        const fetchData = async () => {
            try {
                const response = await fetch(``);
                if (response.ok) {
                    const commentData = await response.json();
                    setComments(commentData.comments);
                } else {
                    console.error('Failed to fetch comments.');
                }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        };

        fetchData();
    }, [productId, userId]);

    return (
        <div id="CommentContainer">
            <h2 style={{textAlign:"start"}}>Comments</h2>
            {/*{comments.map((comment) => (*/}
            {/*    <div key={comment._id} className="CommentRow">*/}
            {/*        <h3>{comment.username}</h3>*/}
            {/*        <p>{comment.text}</p>*/}
            {/*    </div>*/}
            {/*))}*/}
            <div className="CommentRow">
                <h3>Alptekin</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquclass dolorem, dolores earum ipsum
                    minima velit. Accusamus alias aliquam aperiam aspernatur at beatae corporis cum, dolorem enim esse
                    facilis fugiat id laborum molestiae quae quasi quia quibusdam quidem quis ratione reiciendis
                    temporibus tenetur ut veritatis voluptates? Delectus eos molestias nemo quisquam? Adipisci aliquam
                    aspernatur aut blanditiis, corporis culpa cupiditate dolorem dolores eaque facere, fuga fugiat harum
                    ipsa labore laboriosam magni minima nam natus, nemo non odio officiis optio perspiciatis placeat
                    praesentium quaerat repellendus repudiandae saepe sint temporibus totam velit voluptas voluptates!
                    Accusantium commodi cumque eos facere similique sit vero voluptas.</p>
            </div>
            <div className="CommentRow">
                <h3>Alptekin</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid dolorem, dolores earum ipsum
                    minima velit. Accusamus alias aliquam aperiam aspernatur at beatae corporis cum, dolorem enim esse
                    facilis fugiat id laborum molestiae quae quasi quia quibusdam quidem quis ratione reiciendis
                    temporibus tenetur ut veritatis voluptates? Delectus eos molestias nemo quisquam? Adipisci aliquam
                    aspernatur aut blanditiis, corporis culpa cupiditate dolorem dolores eaque facere, fuga fugiat harum
                    ipsa labore laboriosam magni minima nam natus, nemo non odio officiis optio perspiciatis placeat
                    praesentium quaerat repellendus repudiandae saepe sint temporibus totam velit voluptas voluptates!
                    Accusantium commodi cumque eos facere similique sit vero voluptas.</p>
            </div>
        </div>
    );
};

Comment.propTypes = {
    productId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
};

export default Comment;
