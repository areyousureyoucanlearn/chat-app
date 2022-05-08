import Header from './Header';
import Messages from './Messages';
import SendMessage from './Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header title="🦄 Team Unicorns" description = "last seen 45 minutes ago"/>
      <Messages date="22/22/2222"/>
      <SendMessage/>
    </div>
  );
}

export default App;
