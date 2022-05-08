import './Messages.css'

function Messages(){
    return (
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
    )
}

export default Messages;