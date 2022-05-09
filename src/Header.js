import './Header.css';
import { DotsHorizontalIcon } from '@heroicons/react/solid'

function Header({title="🦄 Team Unicorns", description="last seen 45 minutes ago", children}) {
  return (
      <header className="App-header">
        <div className='Avatar-group'>
            {children}
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