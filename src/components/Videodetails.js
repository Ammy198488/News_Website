import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Newsletter from './Newsletter';

const VideoDetails = () => {
    const { id } = useParams();

    // Retrieve the video from the Redux store based on the articleId
    const article = useSelector((state) => {
        // Retrieve the video from the appropriate slice of the Redux store
        const videoArticles = state.news.videoArticles;

        // Combine the video from different categories into a single array
        const articlesData = [
            ...videoArticles,
        ];

        // Find the video with the matching articleId
        return articlesData.find((article) => article.source.id === id);
    });

    // If the video is not found, display a message
    if (!article) {
        return <div className='text-center'>Video not found</div>;
    }

    // Render the article details
    return (
        <div className='container'>
            <div>
                <span>{moment(article.publishedAt).fromNow()}</span>
                <h1>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'black' }}
                    >
                        {article.title}
                    </a>
                </h1>
                <p>{article.author}</p>
                <p className='fs-4'>{article.description}</p>
                <video controls className='card-img-top'>
                    <source src={article.urlToImage} type='video/mp4' />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Newsletter />
        </div>
    );
};

export default VideoDetails;
