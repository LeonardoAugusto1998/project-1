import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import './Home.css'


export default function Home(){

const [lista, setLista] = useState([]);

useEffect( () => {
    
  async function loadFilmes(){
    const response = await api.get('r-api/?api=filmes')
    //console.log(response.data);
    setLista(response.data);
    }

    loadFilmes();

}, []);
    return(
        <div>
           {lista.map( (item) => {
               return(
                   <article key={item.id} className='post'>
                       <h2 className='nome'>{item.nome}</h2>
                      <Link to={`/acessar/${item.id}`} ><img src={item.foto} alt='...' className='img'/></Link>
                   </article>
               );
           })}
        </div>
    );
}