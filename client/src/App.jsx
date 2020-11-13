import { Router, Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import Create from './views/Create';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Create path="/pets/new"/>
        <Detail path="/pets/:id"/>
        <Update path="/pets/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
