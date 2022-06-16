import AOS from 'aos';
import './App.css';
import Landing from './Components/Accordion/Landing';

function App() {
  AOS.init();
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <Landing></Landing>
    </div>
  );
}

export default App;
