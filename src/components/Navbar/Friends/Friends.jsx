import { NavLink } from 'react-router-dom';
import a from './Friends.module.css';

const Friends = (props) => {
  return (
    <div className={a.friend}>
      <img src={props.img} alt={props.alt} />
      <div className="name">{props.name}</div>
    </div>
  );
};

export default Friends;
