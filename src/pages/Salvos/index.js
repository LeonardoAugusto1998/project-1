import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import './Salvos.css';
import { toast } from 'react-toastify';




export default function Salvos(){

const [filmes, setFilmes] = useState([]);


    useEffect( ()=>{
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])

    function handleDelete(id){
        let filtroFilmes = filmes.filter((item)=>{
            return(item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
        toast.dark('Filme excluido com sucesso!')
    }

    return(
        <div id='meus-filmes'>
            <h1>Meus Filmes</h1>
            {filmes.length === 0 && <span>Você não possui nenhum filme salvo :( </span>}

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li  key={item.id}>
                            <h2>{item.nome}</h2>
                            <div className='botoes'>
                            <Link to={`./acessar/${item.id}`}>Ver Detalhes</Link>
                            <button onClick={() => handleDelete(item.id)}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}