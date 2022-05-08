import './Messages.css'
import SelfMessage from './SelfMessage';
import OtherMessage from './OtherMessage';

function Messages({date}){
    return (
        <div className='messages-frame'>
            <div className='date'>
                <span>{date}</span>
            </div>
            <SelfMessage message="Hi cuite!" date="19:07"/>
            <OtherMessage user="Ivan" message="Hi poop!" date="19:08"/>
        </div>
    )
}

export default Messages;