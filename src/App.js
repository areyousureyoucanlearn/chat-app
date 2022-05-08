import burger_menu from './icon-bm.png';
import mention from './icon-mention.png'
import send_message from './send-message.png';
import iconSmile from './icon-smile.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='Avatar-group'>

        </div>
        <div className='title'>
          <h5>🦄 Team Unicorns</h5>
          <span>last seen 45 minutes ago</span>
        </div>
        <button>
          <img src={burger_menu} alt='icon'/>
        </button>
      </header>
      <div className='messages-frame'>
        <div className='date'>
          <span>2/2/2222</span>
        </div>
        <div className='selfMessage'>
          <span>Hi cutie!</span>
          <div className='timeMessage'>
              time
          </div>
        </div>
        <div className='otherUser'>
          <div className='iconUser'>
            icon
          </div>
          <div className='otherMessage'>
            <div><span>Name</span></div>
            <span>Hi poop!</span>
            <div className='timeMessage'>
              time
            </div>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <button>
          <img alt='smile' src={iconSmile}/>
        </button>
        <form className='sendMessage'>
          <input placeholder='message' />
        </form>
        <div className='buttonFormR'>
          <button>
            <img alt='mention' src={mention} />
          </button>
          <button>
            <img alt='send' src={send_message}/>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
