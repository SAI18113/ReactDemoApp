import { useLocation } from 'react-router-dom';
import './Card.css'

const Card = (props) => {
    //Destructuring...ES6
    const{title, onClick} = props;
    
    return (
        <div className='card' onClick={()=>onClick()}>
            <h1>{title}</h1>
            <p>1.7M Views</p>
            <p>This is an excellent Course</p>
        </div>
    )
}

export default Card;