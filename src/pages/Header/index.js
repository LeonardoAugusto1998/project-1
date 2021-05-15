import {Link} from 'react-router-dom';
import './Header.css';



function Header() {
    return (
      <div>
          <header>
                <Link to='/' className='filmaria'>Filmaria</Link>
                <Link to='/salvos' className='salvos'>Salvos</Link>
            </header>
      </div>
    );
  }
  
  export default Header;