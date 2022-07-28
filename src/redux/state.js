let state = {
  profilePages: {
    posts: [
      {
        id: 1,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likeCount: 12,
      },
      {
        id: 2,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et .',
        likeCount: 5,
      },
      {
        id: 3,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        likeCount: 8,
      },
      {
        id: 4,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.',
        likeCount: 20,
      },
      {
        id: 5,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        likeCount: 45,
      },
    ],
  },
  messagePages: {
    dialogs: [
      {
        id: 1,
        name: 'Anna',
        img: 'https://im0-tub-ru.yandex.net/i?id=bc3e0b3548e5f61a635e984840c8bd99&ref=rim&n=33&w=150&h=150',
        alt: 'Anna',
      },
      {
        id: 2,
        name: 'Kas',
        img: 'https://i.pinimg.com/originals/5a/94/f1/5a94f144387d08b47b172074f304ef0d.png',
        alt: 'Anna',
      },
      {
        id: 3,
        name: 'Dina',
        img: 'https://i.pinimg.com/736x/be/29/37/be29371f15f7235313b4afb3a4106f84.jpg',
        alt: 'Anna',
      },
      {
        id: 4,
        name: 'Julia',
        img: 'https://скачать-ватсап-бесплатно.рус/wp-content/uploads/2018/10/kartinka-na-avatar-dlya-devushki-9.jpg',
        alt: 'Anna',
      },
      {
        id: 5,
        name: 'Dima',
        img: 'https://yt3.ggpht.com/a/AATXAJzRUJR7-Y24vfiS8bvLwjlh703_AGSBTfKgYQ5Eag=s900-c-k-c0x00ffffff-no-rj',
        alt: 'Anna',
      },
      {
        id: 6,
        name: 'Vova',
        img: 'https://yt3.ggpht.com/a/AGF-l7_qq4L1mUit1EP_2RKkqeTQYjQ7zQvP7xOfuw=s900-c-k-c0xffffffff-no-rj-mo',
        alt: 'Anna',
      },
    ],
    messages: [
      {
        id: 1,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.',
        img: 'https://im0-tub-ru.yandex.net/i?id=bc3e0b3548e5f61a635e984840c8bd99&ref=rim&n=33&w=150&h=150',
        alt: 'Anna',
      },
      {
        id: 2,
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: 'https://im0-tub-ru.yandex.net/i?id=bc3e0b3548e5f61a635e984840c8bd99&ref=rim&n=33&w=150&h=150',
        alt: 'Anna',
      },
      {
        id: 3,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.',
        img: 'https://im0-tub-ru.yandex.net/i?id=bc3e0b3548e5f61a635e984840c8bd99&ref=rim&n=33&w=150&h=150',
        alt: 'Anna',
      },
      {
        id: 4,
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
        img: 'https://im0-tub-ru.yandex.net/i?id=bc3e0b3548e5f61a635e984840c8bd99&ref=rim&n=33&w=150&h=150',
        alt: 'Anna',
      },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likeCount: 0,
  };

  debugger;

  state.profilePages.posts.push(newPost);
};

export default state;
