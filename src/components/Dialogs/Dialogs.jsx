import { NavLink } from 'react-router-dom';
import Dialog from './Dialog/Dialog';
import a from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
  debugger;

  let dialogsItems = props.state.dialogs.map((dialog) => {
    return (
      <Dialog
        id={dialog.id}
        name={dialog.name}
        img={dialog.img}
        alt={dialog.alt}
      />
    );
  });

  let messagesItems = props.state.messages.map((message) => {
    return (
      <Message message={message.message} img={message.img} alt={message.alt} />
    );
  });

  return (
    <div className={a.dialogs}>
      <div className="dialogs__item">{dialogsItems}</div>
      <div className="messages">{messagesItems}</div>
    </div>
  );
};

export default Dialogs;
