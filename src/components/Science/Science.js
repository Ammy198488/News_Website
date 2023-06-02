import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchScience } from '../newsSlice';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Science = () => {
    const dispatch = useDispatch();
    const scienceArticles = useSelector((state) => state.news.scienceArticles);
    const status = useSelector((state) => state.news.status);
    const error = useSelector((state) => state.news.error);
    console.log(scienceArticles)
    useEffect(() => {
        dispatch(fetchScience());
    }, [dispatch]);

    if (status === 'loading') {
        return <div className='text-center'>Loading...</div>;
    }

    if (status === 'failed') {
        return <div className='text-center'>Error: {error}</div>;
    }


    return (
        <div className='container bg-secondary text-white p-5'>
            <h4 className='pb-3'>Popular this week</h4>
            {scienceArticles.slice(0, 5).map((article, index) => (
                <div className="mb-3" key={index}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={article.urlToImage} className="img-fluid rounded-start" alt="scienceImage" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body px-4 justify-content-center align-items-center">
                                <div className='text-white pb-2'>
                                    <span>Science</span>
                                    <span className='px-3'>{moment(article.publishedAt).fromNow()}</span>
                                </div>
                                <h5 className="card-title fs-6">
                                    <Link to={`/article/${article.title}`} style={{ textDecoration: 'none', color: 'white' }}>{article.title}</Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Science;
