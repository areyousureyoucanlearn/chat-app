import './Messages.css'
import SelfMessage from './SelfMessage';
import OtherMessage from './OtherMessage';

function Messages({date}){
    return (
        <div className='messages-frame'>
            <div className='date'>
                <span>{date}</span>
            </div>
            <SelfMessage message date/>
            <OtherMessage user date/>
        </div>
    )
}

export default Messages;