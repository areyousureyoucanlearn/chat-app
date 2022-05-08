import './Header.css';

function Header() {
  return (
      <header className="App-header">
        <div id='Avatar-group'>

        </div>
        <div className='title'>
          <h5>🦄 Team Unicorns</h5>
          <span>last seen 45 minutes ago</span>
        </div>
        <button>
          <img src="icon-bm.png" alt='icon'/>
        </button>
      </header>
  )
}

export default Header;