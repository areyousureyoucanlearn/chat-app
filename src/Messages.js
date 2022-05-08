import './Messages.css'

function Messages({date, children}){
    return (
        <div className='messages-frame'>
            <div className='date'>
                <span>{date}</span>
            </div>
            {children}
        </div>
    )
}

export default Messages;