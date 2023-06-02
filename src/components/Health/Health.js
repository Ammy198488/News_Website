import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHealth } from '../newsSlice';
import moment from 'moment';
import { Link } from 'react-router-dom';


const Health = () => {
    const dispatch = useDispatch();
    const healthArticles = useSelector((state) => state.news.healthArticles);
    const status = useSelector((state) => state.news.status);
    const error = useSelector((state) => state.news.error);

    useEffect(() => {
        dispatch(fetchHealth());
    }, [dispatch]);

    if (status === 'loading') {
        return <div className='text-center'>Loading...</div>;
    }

    if (status === 'failed') {
        return <div className='text-center'>Error: {error}</div>;
    }

    return (
        <div className='container'>
            <div>
                {healthArticles.slice(0, 2).map((article, index) => (
                    <div className="mb-3 mt-5" key={index}>
                        {index === 0 && (
                            <div>
                                <div className='text-white pb-2'>
                                    <span>Health</span>
                                    <span className='px-3'>{moment(article.publishedAt).fromNow()}</span>
                                </div>
                                <h1 className="card-title pb-5">
                                    <Link to={`/article/${article.id}`} style={{ textDecoration: 'none', color: 'white' }}>{article.title}</Link>
                                </h1>
                            </div>
                        )}
                        <div className="row g-0 border-start border-primary">
                            <div className="col-md-6">
                                <img src={article.urlToImage} className="img-fluid rounded-start" alt="healthImage" />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body px-4 justify-content-center align-content-center">
                                    <h5 className="card-title fs-6">
                                        <Link to={`/article/${article.title}`} style={{ textDecoration: 'none', color: 'white' }}>{article.title}</Link>
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
};

export default Health;
