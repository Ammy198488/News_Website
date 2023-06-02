import React, { useState } from 'react';
import Latestnews from './latestNews';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Main = () => {
    const [showAllArticles, setShowAllArticles] = useState(false);
    const articles = useSelector((state) => state.news.articles);

    const handleViewAllArticles = () => {
        setShowAllArticles(true);
    };

    return (
        <div className='container'>
            <h4>Our Latest Post</h4>
            <button onClick={handleViewAllArticles}>View All Articles</button>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {articles.slice(0, 8).map((article, index) => (
                    <div key={index}>
                        <div className="col">
                            <div className="card">
                                <img src={article.urlToImage} alt='urlImage' />
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.description}</p>
                                    <span>{article.author}</span>
                                    <span>{moment(article.publishedAt).fromNow()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showAllArticles && <Latestnews />}
        </div>
    );
};

export default Main;
