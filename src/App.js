import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Categories from './layouts/Categories';
import { Container } from 'semantic-ui-react';

import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Dashboard/>
            <Categories/>   
        </Container>
<Navi/>
      </header>
    </div>
  );
}

export default App;
