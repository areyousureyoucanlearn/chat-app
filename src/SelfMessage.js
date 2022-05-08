import './SelfMessage.css'
function SelfMessage({message, date}) {
    return (
        <div className='selfMessage'>
            <span>{message}</span>
            <div className='timeMessage'>
                <span>{date}</span>
            </div>
        </div>
    )
}

export default SelfMessage;