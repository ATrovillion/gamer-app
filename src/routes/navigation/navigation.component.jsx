import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as GamesLogo } from '../../assets/images/games-icon.svg';

import './navigation.styles.scss';

const Navigation = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <GamesLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/contacts">
          CONTACTS
        </Link>
        <Link className="nav-link" to="/sign-in">
          SIGN IN
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
