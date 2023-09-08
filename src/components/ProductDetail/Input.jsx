import {useState} from 'react';
import "./input.css"

const Input = () => {
    const [comment, setComment] = useState('');

    const handleInputChange = (e) => {
        setComment(e.target.value);
    };

    const handleFormSubmit = async () => {
        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({comment}),
            });

            if (response.ok) {
                setComment('');
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
                    <textarea id="comment" className="CommentInput" placeholder="Enter your Comment" value={comment} onChange={handleInputChange}/>
                </div>
                <button onClick={handleFormSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default Input;
