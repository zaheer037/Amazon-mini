import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <button className="back-to-top"><a href='#' style={{textDecoration:"none", color:"white"}}>Back to top</a></button>
      </div>
      <div className="footer-links">
        <div>
          <h5>Get to Know Us</h5>
          <ul>
            <li><a href="#"><i class="fa fa-info-circle" aria-hidden="true"></i>  About Us</a></li>
            <li><a href="#"><i class="fa fa-graduation-cap" aria-hidden="true"></i>  Careers</a></li>
            <li><a href="#"><i class="fa fa-newspaper-o" aria-hidden="true"></i>  Press Releases</a></li>
            <li><a href="#"><i class="fa fa-amazon" aria-hidden="true"></i>  Amazon Science</a></li>
          </ul>
        </div>
        <div>
          <h5>Make Money with Us</h5>
          <ul>
            <li><a href="#"><i class="fa fa-bullhorn" aria-hidden="true"></i>  Sell on Amazon</a></li>
            <li><a href="#"><i class="fa fa-handshake-o" aria-hidden="true"></i>  Become an Affiliate</a></li>
            <li><a href="#"><i class="fa fa-television" aria-hidden="true"></i>  Advertise Your Products</a></li>
            <li><a href="#"><i class="fa fa-amazon" aria-hidden="true"></i>  Amazon Pay on Merchants</a></li>
          </ul>
        </div>
        <div>
          <h5>Amazon Payment Products</h5>
          <ul>
            <li><a href="#"><i class="fa fa-credit-card" aria-hidden="true"></i>  Amazon Business Card</a></li>
            <li><a href="#"><i class="fa fa-gift" aria-hidden="true"></i>  Shop with Points</a></li>
            <li><a href="#"><i class="fa fa-refresh" aria-hidden="true"></i>  Reload Your Balance</a></li>
            <li><a href="#"><i class="fa fa-money" aria-hidden="true"></i>  Amazon Currency Converter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 1996-2023, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer