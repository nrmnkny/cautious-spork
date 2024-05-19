import React from 'react';
import ReviewTitle from './ReviewTitle';
import MediaSection from './MediaSection';
import Summary from './Summary';
import DetailedAnalysis from './DetailedAnalysis';
import LyricsAndThemes from './LyricsAndThemes';
import PersonalImpressions from './PersonalImpressions';
import Rating from './Rating';
import Comments from './Comments';
import RelatedReviews from './RelatedReviews';

const Review = ({ review }) => {
    if (!review) {
        return <div className="text-center text-gray-500">No review data available</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4 bg-gray-800 shadow-md rounded-lg">
            <ReviewTitle 
                title={review.title || 'Untitled'} 
                artist={review.artist || 'Unknown Artist'} 
                album={review.album || 'Unknown Album'} 
                releaseDate={review.releaseDate || 'Unknown Release Date'} 
                reviewer={review.reviewer || 'Anonymous'} 
                reviewDate={review.reviewDate || 'Unknown Review Date'} 
            />
            <MediaSection coverImage={review.image_url} audioSample={review.audioSample} />
            <Summary summary={review.summary || 'No summary available.'} />
            <DetailedAnalysis analysis={review.analysis || 'No detailed analysis available.'} tracks={review.tracks || []} />
            <LyricsAndThemes lyrics={review.lyrics || 'No lyrics discussion available.'} themes={review.themes || 'No themes discussion available.'} />
            <PersonalImpressions impressions={review.impressions || 'No personal impressions available.'} />
            <Rating rating={review.rating || { overall: 0, lyrics: 0, music: 0, production: 0 }} />
            <Comments comments={review.comments || []} />
            <RelatedReviews relatedReviews={review.relatedReviews || []} />
        </div>
    );
};

export default Review;
