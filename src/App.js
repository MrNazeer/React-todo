import './App.css';
import Header from './components/Header/Header';
import {Todoinput} from './components/TodoInput/Todoinput';

function App() {
  return (
    <div className="App">
      <div className ="container">
        <Header/>
        <Todoinput/>
        
        
      </div>
    </div>
  );
}

export default App;
