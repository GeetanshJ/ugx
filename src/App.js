import './App.css';
import Aside from './Aside/Aside';
import Dashboard from './Dashboard/Dashboard';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Aside/>
      <Dashboard/>
    </div>
  );
}

export default App;
