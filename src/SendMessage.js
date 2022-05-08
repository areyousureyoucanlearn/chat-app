import './SendMessage.css'

function SendMessage() {
    return (
        <footer className='footer'>
        <button>
          <img alt='smile' src="icon-smile.png"/>
        </button>
        <form className='sendMessage'>
          <input placeholder='message' />
        </form>
        <div className='buttonFormR'>
          <button>
            <img alt='mention' src="icon-mention.png" />
          </button>
          <button>
            <img alt='send' src="send-message.png"/>
          </button>
        </div>
      </footer>
    )
}

export default SendMessage;