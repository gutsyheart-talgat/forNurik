import './App.css';
import First from './pages/First'
import Second from './pages/Second'
import Third from './pages/Third'
import Fifth from './pages/Fifth'

function App() {
  return (
    <div className="background">
      <div className="container">
        <First />
        <Second />
        <Third />
        <Fifth />
      </div>
    </div>
  );
}

export default App;
