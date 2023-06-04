import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-secondary mb-0 text-white'>
            <div className="container ">
                {/* First Navbar */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Innovation</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">More</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><Icon icon="skill-icons:instagram" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><Icon icon="skill-icons:twitter" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><Icon icon="devicon:facebook" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><Icon icon="ri:youtube-fill" color="red" /></a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <hr />
                {/* Second Navbar */}
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className='text-white' to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                            <Icon icon="ion:logo-rss" size={24} />
                            <h4 style={{ marginLeft: '8px' }}>Logo</h4>
                        </Link>
                        {/* Offcanvas Button (visible on small screens) */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Offcanvas Menu */}
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body text-center text-sm-dark">
                                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Feature</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Shop</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Blog</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                                <button type="button" className="btn btn-danger">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <hr />
            </div>
        </div>
    );
}

export default Navbar;