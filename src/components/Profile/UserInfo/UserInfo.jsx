import a from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className="user__info">
      <div className={a.user__banner}>
        <img
          src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614263857_6-p-cherno-belii-graficheskii-fon-7.jpg"
          alt="user-banner"
        />
      </div>
      <div className={a.user__inner}>
        <div className={a.user__avatar}>
          <img
            src="https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg"
            alt="ava"
          />
        </div>
        <div className="user__name">Имя Фамилия</div>
      </div>
    </div>
  );
};

export default UserInfo;
