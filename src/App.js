import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
// import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'c8db7cf5-bf91-4fbe-9b11-6608b23bee2c';

const App = () => {
//   if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName="Jeya Dharshini"
      userSecret="jd"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;