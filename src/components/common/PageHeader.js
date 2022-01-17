import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ image, title }) => {
  return (
    <div>
      <header
        class="page-title page-bg"
        style={{ backgroundImage: `url(assets/images/${image})` }}
      >
        <div class="container">
          <div class="page-title-inner">
            <div class="section-title">
              <h1>{title}</h1>
              <ul class="page-breadcrumbs">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>{title}</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default PageHeader;
