import React from "react";
import amazonLogo from "../../assets/amazon-logo-large-white.png";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <nav>
        {/* NAVBAR - LEFT */}
        <div className="nav-left">
          {/* Amazon Logo */}
          <div className="logo">
            <img src={amazonLogo} width={110} alt="Amazon Logo" />
            <span className="domain">.co.za</span>
          </div>

          {/* Location */}
          <div className="location">
            <div className="location-icon">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: "20px", height: "20px" }}
              >
                <path d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                <path d="M12.01 9c.63-.83 1-1.87 1-3 0-2.76-2.24-5-5-5a5.002 5.002 0 0 0-4 8l4 6 4-6Z"></path>
              </svg>
            </div>
            <div className="location-text">
              <span>Deliver to Abdullah</span>
              <span className="address">Johannesburg 2091</span>
            </div>
          </div>
        </div>

        {/* NAVBAR - MIDDLE */}
        <div className="nav-middle">
          {/* Search Area */}
          <select name="category" id="category">
            <option value="">All</option>
            <option value="">All Departments</option>
            <option value="">Arts, Crafts & Sewing</option>
            <option value="">Baby</option>
            <option value="">Beauty</option>
            <option value="">Books</option>
            <option value="">Electronics & Photo</option>
            <option value="">Gift Cards</option>
            <option value="">Health & Personal Care</option>
            <option value="">Home & Kitchen</option>
            <option value="">Home Improvements</option>
            <option value="">Office Products</option>
            <option value="">Pet Supplies</option>
            <option value="">Sports & Outdoors</option>
            <option value="">Toys & Games</option>
            <option value="">Video Game</option>
          </select>
          <input type="text" placeholder="Search Amazon.co.za" />
          <div className="search-btn-container">
            <button type="submit">
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: "24px", height: "24px" }}
              >
                <path d="m11 11 4 4"></path>
                <path d="M7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10Z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* NAVBAR - RIGHT */}
        <div className="nav-right">
          {/* User Account */}
          <div className="account">ACCOUNT</div>

          {/* Returns & Orders */}
          <div className="orders">ORDERS</div>

          {/* Cart / Basket */}
          <div className="cart">CART</div>
        </div>
      </nav>
      <div className="category-section"></div>
    </>
  );
};

export default Sidebar;
