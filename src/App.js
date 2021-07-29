import { Switch, Link, Route, Redirect } from 'react-router-dom'
import './App.css';
import ContactList from './pages/ContactList';
import FieldsList from './pages/FieldsList';
import CreateContact from './pages/CreateContact';
import CreateField from './pages/CreateField';
import { Button } from '@material-ui/core';
import ContactEdit from './pages/ContactEdit';
import FieldEdit from './pages/FieldEdit';



export function App() {
  return (
    <>
    <div className ="main-controls">
      <Link to="/contacts" className="link"><Button variant="contained" color="primary">Список контактов</Button></Link>
      <Link to="/fields" className="link"><Button variant="contained" color="secondary">Список полей</Button></Link>
    </div>

    <Switch>
      <Route path="/contacts" exact>
        <ContactList />
      </Route>
      <Route path="/contacts/add" exact>
        <CreateContact />
      </Route>
      <Route path="/fields" exact>
        <FieldsList />
      </Route>
      <Route path="/fields/add" exact>
        <CreateField />
      </Route>
      <Route path="/contacts/edit/:id" exact>
        <ContactEdit />
      </Route>
      <Route path="/fields/edit/:id" exact>
        <FieldEdit />
      </Route>
      <Route path="/" exact>
        <Redirect to="/contacts"/>
      </Route>
    </Switch>
    </>

    
  );
}

export default App;
