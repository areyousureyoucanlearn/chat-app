import Header from './Header';
import Messages from './Messages';
import SendMessage from './Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header title="🦄 Team Unicorns" description = "last seen 45 minutes ago"/>
      <Messages date={new Date()} />
      <SendMessage/>
    </div>
  );
}

export default App;
