import './Header.css';

function Header({title, description}) {
  return (
      <header className="App-header">
        <div id='Avatar-group'>
            <div>
              <img src="" alt=''/>
            </div>
        </div>
        <div className='title'>
          <h5>{title}</h5>
          <span>{description}</span>
        </div>
        <button>
          <img src="icon-bm.png" alt='icon'/>
        </button>
      </header>
  )
}

export default Header;