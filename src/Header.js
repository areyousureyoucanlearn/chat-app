import './Header.css';
import { DotsHorizontalIcon } from '@heroicons/react/solid'

function Header({title, description, users}) {

  const userGroup = [...users].reverse().splice(0,4)

  return (
      <header className="App-header">
        <div className='Avatar-group'>
        {
          userGroup.map((user, index) => {
            return (
              <div id={user.id} key={user.id} className='Avatar' style={{left: index*30+'px'}}>
                <img src={user.image} alt={user.name}></img>
              </div>
            )
          })
        }
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