import Routes from './routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div>
      <Routes/>
      <ToastContainer autoClose={2000}/>
    </div>
  );
}


