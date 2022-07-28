import a from './../Dialogs.module.css';

const Message = (props) => {
  debugger;
  return (
    <div className={a.message}>
      <img src={props.img} alt={props.alt} />
      <div>{props.message}</div>
    </div>
  );
};

export default Message;
