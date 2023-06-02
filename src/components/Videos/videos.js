import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideo } from '../newsSlice';
import { Link } from 'react-router-dom';

const Videos = () => {
    const dispatch = useDispatch();
    const videoArticles = useSelector((state) => state.news.videoArticles);
    const status = useSelector((state) => state.news.status);
    const error = useSelector((state) => state.news.error);
    const [displayedArticles, setDisplayedArticles] = useState([]);

    useEffect(() => {
        dispatch(fetchVideo());
    }, [dispatch]);

    useEffect(() => {
        setDisplayedArticles(videoArticles.slice(0, 8));
    }, [videoArticles]);

    const handleViewAllArticles = () => {
        setDisplayedArticles(videoArticles);
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
                <h4>Videos</h4>
                <button type='button' className='btn btn-danger' onClick={handleViewAllArticles}>view all</button>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {displayedArticles.slice(0, 4).map((article, index) => (
                    <div key={index} className="col">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/video/${article.source.id}`}>
                            <div className="card h-100">
                                <video controls className='card-img-top'>
                                    <source src={article.urlToImage} type='video/mp4' />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <div className='d-flex justify-content-between text-secondary fs-6'>
                                        <span>{article.author}</span>
                                        <span>{moment(article.publishedAt).fromNow()}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Videos;
