import './OtherMessage.css'

function OtherMessage() {
    return (
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
    )
}
export default OtherMessage;