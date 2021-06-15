import { menuItems } from '../../common';
import classes from './style.module.scss';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  handleCloseSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({ handleCloseSidebar }) => {
  return (
    <div className={classes.root}>
      <div className={classes.closeIcon}>
        <FontAwesomeIcon
          onClick={handleCloseSidebar}
          color="#fff"
          icon={faTimes}
          size={'2x'}
        />
      </div>
      <div className={classes.navbar}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} onClick={handleCloseSidebar}>
              <NavLink
                activeStyle={{
                  fontWeight: 'bold',
                  textDecoration: 'underline',
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

export default Sidebar;
