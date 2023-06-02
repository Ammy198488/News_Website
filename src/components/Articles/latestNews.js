import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../newsSlice';
import { Link } from 'react-router-dom';

const Latestnews = () => {
    const dispatch = useDispatch();
    const allArticles = useSelector((state) => state.news.articles);
    const status = useSelector((state) => state.news.status);
    const error = useSelector((state) => state.news.error);
    const [displayedArticles, setDisplayedArticles] = useState([]);

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    useEffect(() => {
        setDisplayedArticles(allArticles.slice(0, 8));
    }, [allArticles]);

    const handleViewAllArticles = () => {
        setDisplayedArticles(allArticles);
    };

    if (status === 'loading') {
        return <div className='text-center'>Loading...</div>;
    }

    if (status === 'failed') {
        return <div className='text-center'>Error: {error}</div>;
    }

    return (
        <div className='container'>
            <div className='d-flex justify-content-between py-5'>
                <h4>Our Latest Post</h4>
                <button type='button' className='btn btn-danger' onClick={handleViewAllArticles}>view all</button>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {displayedArticles.map((article, index) => (
                    <div key={index} className="col">
                        <div className="card h-100">
                            <img src={article.urlToImage} alt='urlImage' className='card-img-top' />
                            <div className="card-body">
                                <h5 className="card-title fs-6">
                                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/article/${article.title}`}>{article.title}</Link>
                                </h5>
                                <div className='d-flex justify-content-between text-secondary fs-6'>
                                    <span>{article.author}</span>
                                    <span>{moment(article.publishedAt).fromNow()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Latestnews;
