import { addPost } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import a from './Profile.module.css';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {
  return (
    <div className="user">
      <UserInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
