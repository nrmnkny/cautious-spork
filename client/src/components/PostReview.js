import React, { useState } from 'react';

const PostReview = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await fetch('http://localhost:3001/api/reviews', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, 
                },
            });

            if (!response.ok) {
                throw new Error('Failed to post review');
            }

            const result = await response.json();
            console.log(result);
            setTitle('');
            setContent('');
            setImage(null);
            setError('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Post a Review</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <br />
                <label>Content:
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                </label>
                <br />
                <label>Image:
                    <input type="file" onChange={handleImageChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default PostReview;
