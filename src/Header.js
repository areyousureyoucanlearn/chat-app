import './Header.css';
import { DotsHorizontalIcon } from '@heroicons/react/solid'

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
        <DotsHorizontalIcon  className="icon"/>
      </header>
  )
}

export default Header;