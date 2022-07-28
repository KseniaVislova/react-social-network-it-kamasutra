import a from './Post.module.css';

const Post = (props) => {
  return (
    <div className={a.inner}>
      <div className={a.avatar}>
        <img
          src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"
          alt="ava"
        />
      </div>
      <div className={a.post}>{props.message}</div>
      <div className={a.like}>{`like: ${props.likeCount}`}</div>
    </div>
  );
};

export default Post;
