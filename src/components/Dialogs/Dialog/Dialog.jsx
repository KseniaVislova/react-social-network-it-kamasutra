import { NavLink } from 'react-router-dom';
import a from './../Dialogs.module.css';

const Dialog = (props) => {
  debugger;
  return (
    <div className={a.dialog}>
      <img src={props.img} alt={props.alt} />
      <NavLink to={'/dialogs/' + props.id} activeClassName={a.active}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;
