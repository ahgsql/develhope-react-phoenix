import {useState} from 'react';
import "./input.css"
import axios from 'axios';

import {useAuth} from "../../context/AuthProvider.jsx";
const Input = (id) => {
    const [comment, setComment] = useState('');
    const { user, login, logout, loginCheck } = useAuth();
    const apiUrl =`http://localhost:9000/api/comments`;
    const handleInputChange = (e) => {
        setComment(e.target.value);

    };

    const handleFormSubmit = async () => {
        try {
            const response = await axios.post(apiUrl, {
                userName: user.userName,
                productId: id,
                content: comment,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                setComment('');
                console.log('Comment inserted into MongoDB successfully.');
            } else {
                console.error('Failed to insert comment into MongoDB.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (

        <div id="InputContainer">
            <div id="InputRow">
                <div id="Input">
                    <label htmlFor="comment"><h2 style={{textAlign:"start"}}>Enter Your Comment</h2></label>
                    <textarea id="comment" className="CommentInput" disabled={!user} placeholder={user ? "Enter your comment":"Please Sign In to Comment"} value={comment} onChange={handleInputChange}/>
                </div>
                <button disabled={!user} onClick={handleFormSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Input;
