import Header from './Header';
import Messages from './Messages';
import SendMessage from './SendMessage';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header title="🦄 Team Unicorns" description = "last seen 45 minutes ago"/>
      <Messages date="08/05/2022" />
      <SendMessage/>
    </div>
  );
}

export default App;
