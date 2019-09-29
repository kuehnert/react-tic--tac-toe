import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="header__title">{props.title}</h1>
        <h3 className="header__subtitle">A browser game by Mr K.</h3>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
