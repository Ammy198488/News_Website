import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntertainment } from '../newsSlice';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Recommend = () => {
    const dispatch = useDispatch();
    const entertainArticles = useSelector((state) => state.news.entertainArticles);
    const status = useSelector((state) => state.news.status);
    const error = useSelector((state) => state.news.error);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);

    useEffect(() => {
        dispatch(fetchEntertainment());
    }, [dispatch]);

    if (status === 'loading') {
        return <div className='text-center'>Loading...</div>;
    }

    if (status === 'failed') {
        return <div className='text-center'>Error: {error}</div>;
    }

    // Pagination
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = entertainArticles.slice(firstPostIndex, lastPostIndex);
    const pageNumber = Math.ceil(entertainArticles.length / postPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='container'>
            <div className='d-flex justify-content-between py-5'>
                <h4 className='py-3'>Recommended For You</h4>
                <div>{pageNumber > 1 && (
                    <div className='my-3 text-center'>
                        <button
                            className='px-3 py-1 m-1 text-center border-0 bg-body'
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <i className='bi bi-chevron-left'></i>
                        </button>
                        {Array.from({ length: pageNumber }, (_, index) => index + 1).map((num) => (
                            <button
                                key={num}
                                className={`px-3 py-1 m-1 text-center border-0 rounded btn ${currentPage === num ? 'btn-primary' : 'btn-outline-primary'
                                    }`}
                                onClick={() => handlePageChange(num)}
                            >
                                {num}
                            </button>
                        ))}
                        <button
                            className='px-3 py-1 m-1 text-center border-0 bg-body'
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === pageNumber}
                        >
                            <i className='bi bi-chevron-right'></i>
                        </button>
                    </div>
                )}</div>
            </div>

            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {currentPosts.map((article, index) => (
                    <div key={index} className='col'>
                        <div className='card h-100'>
                            <img src={article.urlToImage} alt='urlImage' className='card-img-top' />
                            <div className='card-body'>
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

export default Recommend;
