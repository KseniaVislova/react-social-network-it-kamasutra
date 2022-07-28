import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import a from './Navbar.module.css';

const Navbar = (props) => {
  let friendsElements = props.state.dialogs.map((friend) => {
    return <Friends name={friend.name} img={friend.img} alt={friend.alt} />;
  });
  return (
    <nav className={`nav ${a.nav}`}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={a.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={a.active}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/photos" activeClassName={a.active}>
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={a.active}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={a.active}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={a.active}>
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/friends" activeClassName={a.active}>
            Friends
          </NavLink>
          <div className={a.friends__inner}>{friendsElements}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
