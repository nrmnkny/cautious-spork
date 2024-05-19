import React from 'react';

const LyricsAndThemes = ({ lyrics, themes }) => {
    return (
        <div className="lyrics-themes my-4 p-4 bg-gray-900 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-illuminatingLime mb-2">Lyrics & Themes</h2>
            <p className="text-md text-gray-400 mb-4">{lyrics}</p>
            <p className="text-md text-gray-400">{themes}</p>
        </div>
    );
};

export default LyricsAndThemes;
