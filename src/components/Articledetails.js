import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Newsletter from './Newsletter';

const ArticleDetails = () => {
    const { articleId } = useParams();

    // Retrieve the article from the Redux store based on the articleId
    const article = useSelector((state) => {
        // Retrieve the articles from the appropriate slice of the Redux store
        const healthArticles = state.news.healthArticles;
        const scienceArticles = state.news.scienceArticles;
        const entertainArticles = state.news.entertainArticles;
        const articles = state.news.articles;

        // Combine the articles from different categories into a single array
        const articlesData = [
            ...healthArticles,
            ...scienceArticles,
            ...entertainArticles,
            ...articles,
        ];

        // Find the article with the matching articleId
        return articlesData.find((article) => article.source.title === articleId);
    });

    // If the article is not found, display a message
    if (!article) {
        return <div className='text-center'>Article not found</div>;
    }

    // Render the article details
    return (
        <div className='container'>
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
            <p>Author: {article.author}</p>
            <span>{moment(article.publishedAt).fromNow()}</span>
            <p className='fs-4'>{article.description}</p>
            <img src={article.urlToImage} alt="Article" width={1000} />
            <Newsletter />
        </div>
    );
};

export default ArticleDetails;
