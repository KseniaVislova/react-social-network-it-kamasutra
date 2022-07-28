import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Photos from './components/Photos/Photos';
import News from './components/News/News';
import Music from './components/Music/Music';
import Friend from './components/Friend/Friend';
import Settings from './components/Settings/Settings';

import { BrowserRouter, Route } from 'react-router-dom';
import { addPost } from './redux/state';

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar state={props.state.messagePages} />
        <div class="content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                state={props.state.profilePages}
                addPost={props.addPost}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.messagePages} />}
          />
          <Route path="/photos" render={() => <Photos />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/friends" render={() => <Friend />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
