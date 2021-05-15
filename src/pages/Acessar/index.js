import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './Acessar.css'
import {useHistory} from 'react-router-dom';
import {toast} from 'react-toastify';

export default function Acessar(){

const { id } = useParams();
const [filme, setFilme] = useState([]);
const [loading, setLoading] = useState(true);
const history = useHistory();

    useEffect(()=>{

        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            setFilme(response.data);
            setLoading(false);

            if(response.data.length === 0){
                history.replace('/');
            }
        }
        
        
        loadFilme();
    }, [history, id]);

    function salvarFilme(){
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];
        const hasFilme = filmesSalvos.some((filmesalvo) => filmesalvo.id === filme.id )
        if(hasFilme){
            toast.error('Você Já tem esse filme salvo !');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!');

    }

    if(loading){
        return(
            <div>
                <h1>Carregando seu filme...</h1>
            </div>
        );
    }

    return(
        <div className='conteudo'>
        <h1 className='nome-acessar'>{filme.nome}</h1>
        <img src={filme.foto} alt={filme.nome} className='img2'/>
        <h3>Sinopse</h3>
        <h3 className='sinopse'>{filme.sinopse}</h3>
        <div className='botoes'>

            <a onClick={salvarFilme} className='salvar'>Salvar</a>
            <a target='blank' href={`https://www.youtube.com/results?search_query=${filme.nome}+trailer`} className='salvar' >Trailer</a>

        </div>
        </div>
    );
}