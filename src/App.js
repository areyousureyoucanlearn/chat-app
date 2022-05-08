import Header from './Header';
import Messages from './Messages';
import SendMessage from './SendMessage';
import SelfMessage from './SelfMessage';
import OtherMessage from './OtherMessage';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header title="🦄 Team Unicorns" description = "last seen 45 minutes ago"/>
      <Messages date="08/05/2022">
        <SelfMessage message="Hi cuite!" date="19:07"/>
        <OtherMessage user="Ivan" message="Hi poop!" date="19:08"/>
      </Messages>
      <SendMessage/>
    </div>
  );
}

export default App;
