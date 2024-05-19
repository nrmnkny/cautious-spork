import React, { useState } from 'react';
import API_URL from '../config';

const PostReview = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [detailedAnalysis, setDetailedAnalysis] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [themes, setThemes] = useState('');
    const [personalImpressions, setPersonalImpressions] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('summary', summary);
        formData.append('detailedAnalysis', detailedAnalysis);
        formData.append('lyrics', lyrics);
        formData.append('themes', themes);
        formData.append('personalImpressions', personalImpressions);
        if (image) {
            formData.append('image', image);
        }

        try {
            const response = await fetch(`${API_URL}/api/reviews`, {
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
            setSummary('');
            setDetailedAnalysis('');
            setLyrics('');
            setThemes('');
            setPersonalImpressions('');
            setImage(null);
            setError('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark text-white">
            <div className="max-w-md w-full bg-gray-900 rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold mb-8 text-center">Post a Review</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="text-sm font-medium">Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="summary" className="text-sm font-medium">Summary</label>
                        <textarea 
                            id="summary" 
                            value={summary} 
                            onChange={(e) => setSummary(e.target.value)} 
                            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                            required 
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="detailedAnalysis" className="text-sm font-medium">Detailed Analysis</label>
                        <textarea 
                            id="detailedAnalysis" 
                            value={detailedAnalysis} 
                            onChange={(e) => setDetailedAnalysis(e.target.value)} 
                            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                            required 
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="lyrics" className="text-sm font-medium">Lyrics</label>
                        <textarea 
                            id="lyrics" 
                            value={lyrics} 
                            onChange={(e) => setLyrics(e.target.value)} 
                            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                            required 
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="themes" className="text-sm font-medium">Themes</label>
                        <textarea 
                            id="themes" 
                            value={themes} 
                            onChange={(e) => setThemes(e.target.value)} 
                            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                            required 
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="personalImpressions" className="text-sm font-medium">Personal Impressions</label>
                        <textarea 
                            id="personalImpressions" 
                            value={personalImpressions} 
                            onChange={(e) => setPersonalImpressions(e.target.value)} 
                            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                            required 
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="image" className="text-sm font-medium">Image</label>
                        <input 
                            type="file" 
                            id="image" 
                            onChange={handleImageChange} 
                            className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm shadow-sm placeholder-gray-400
                                       focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                        />
                    </div>
                    <div>
                        <button 
                            type="submit" 
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gold 
                                       hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                            Submit
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default PostReview;
