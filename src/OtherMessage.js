import './OtherMessage.css'

function OtherMessage({user, date}) {
    return (
        <div className='otherUser'>
            <div className='iconUser'>
                <img src={user.icon} alt={user.name} />
            </div>
            <div className='otherMessage'>
                <div><span>{user.name}</span></div>
                <span>{user.message}</span>
                <div className='timeMessage'>
                    <span>{date}</span>
                </div>
            </div>
        </div>
    )
}
export default OtherMessage;