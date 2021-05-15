import {Link} from 'react-router-dom';
import IMAGE from './images.png';
import './Error.css';

export default function Error(){
    return(
        <div className='blocoError'>
            <h1>Error, A página que você procura não Existe !</h1>
            <h3>Talvez você esteja procurando:</h3>
            <img src={IMAGE} alt='imagemtriste' className='imagemtriste' />
            <Link to='/'>Ir para Home</Link>
        </div>
    );
}