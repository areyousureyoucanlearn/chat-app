import './SendMessage.css'
import { PaperAirplaneIcon, EmojiHappyIcon, AtSymbolIcon } from '@heroicons/react/solid'

function SendMessage() {
    return (
        <footer className='footer'>
          <EmojiHappyIcon className="icon"/>
          <form className='sendMessage'>
            <input placeholder='message' />
          </form>
          <div className='buttonFormR'>
            <AtSymbolIcon className="icon"/>
            <PaperAirplaneIcon className="icon"/>
          </div>
        </footer>
    )
}

export default SendMessage;