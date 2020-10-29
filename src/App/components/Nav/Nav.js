import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.module.scss';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
const Nav = () => (
  <div className={styles.Nav} data-testid="Nav">
    <nav className="navbar navbar-inverse" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Title</a>
      </div>
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav">
          <li className="active">
            <Link to="/meme">
              meme
            </Link>
          </li>
          <li> <Link to="/">
            Home
            </Link></li>
        </ul>
      </div>
    </nav>
  </div>
);

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
