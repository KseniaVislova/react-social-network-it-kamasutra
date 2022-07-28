import a from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => {
    return <Post message={post.message} likeCount={post.likeCount} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    debugger;
  };

  return (
    <div className={a.user__posts}>
      <div className={a.user__newpost}>
        <textarea ref={newPostElement} cols="30" rows="1"></textarea>
        <button onClick={addPost}>Add Post </button>
      </div>
      <div className="user__oldposts">{postsElements}</div>
    </div>
  );
};

export default MyPosts;
