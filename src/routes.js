import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Acessar from './pages/Acessar';
import Salvos from './pages/Salvos';
import Error from './pages/Error';


function Routes() {
    return (
      <div>
        <BrowserRouter>
        <Header/>
        <Switch>

          <Route exact path='/' component={Home}/>
          <Route exact path='/acessar/:id' component={Acessar}/>
          <Route exact path='/salvos' component={Salvos}/>
          <Route exact path='/*' component={Error}/>

        </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
  export default Routes;