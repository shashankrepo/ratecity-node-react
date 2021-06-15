import { menuItems } from '../../common';
import classes from './style.module.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
  handleOpenSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ handleOpenSidebar }) => {
  return (
    <div className={classes.root}>
      <h4>Top Home Loan Products</h4>
      <div className={classes.menuIcon}>
        <FontAwesomeIcon
          onClick={handleOpenSidebar}
          icon={faBars}
          size={'lg'}
        />
      </div>
      <div className={classes.navbar}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                activeStyle={{
                  fontWeight: 'bold',
                  color: '#000',
                }}
                to={item.link}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
