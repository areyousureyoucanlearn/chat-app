import './OtherMessage.css'

function OtherMessage({user, message, date}) {
    return (
        <div className='otherUser'>
            <div className='iconUser'>
                {user}
            </div>
            <div className='otherMessage'>
                <div><span>{user}</span></div>
                <span>{message}</span>
                <div className='timeMessage'>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    )
}
export default OtherMessage;