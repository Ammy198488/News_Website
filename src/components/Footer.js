import React from 'react';

const Footer = () => {
  return (
    <div className="footer container mt-5">
      <div className="d-flex flex-wrap justify-content-between text-start">
        <div className="col-sm-6 col-md-4 col-xs-12">
          <h2 className="pb-2">LOGO</h2>
          <div className="log">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nihil animi sequi reiciendis molestiae
              fugiat eaque ipsum dolores blanditiis, cumque officiis.
            </p>
          </div>
        </div>
        <div className="col-sm-6 col-md-2 col-xs-12">
          <h5 className="pb-2">Categories</h5>
          <ul className="list-unstyled align-baseline">
            <li>
              <a href="#">International</a>
            </li>
            <li>
              <a href="#">Regional</a>
            </li>
            <li>
              <a href="#">Politics</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">Sports</a>
            </li>
            <li>
              <a href="#">Health</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-2 col-xs-12">
          <h5 className="pb-2">Company</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Of Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-2 col-xs-12">
          <h5 className="pb-2">Social Media</h5>
          <ul className="list-unstyled text-decoration-none">
            <li>
              <a href="#">Youtube</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <p>Copyright Tanah Air Studio</p>
        <select className="border-none" name="lang" id="lang">
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="es">ES</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
