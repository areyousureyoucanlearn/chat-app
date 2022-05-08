import './Messages.css'
import SelfMessage from './SelfMessage';
import OtherMessage from './OtherMessage';

function Messages(){
    return (
        <div className='messages-frame'>
            <div className='date'>
            <span>2/2/2222</span>
            </div>
            <SelfMessage/>
            <OtherMessage/>
        </div>
    )
}

export default Messages;