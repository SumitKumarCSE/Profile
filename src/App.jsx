import './App.css';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Posts />
    </div>
  );
}

export default App;
