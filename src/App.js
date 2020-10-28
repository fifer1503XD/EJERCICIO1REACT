import logo from './logo.svg';
import './App.css';
import './components/style.css'
import Profile from './components/Profile'
import Learn from './components/Learn';
import Interests from './components/Interests';
import Expectations from './components/Expectations';
function App() {
  return (
    <div className="container-cards">
      <Profile />
      <Learn />
      <Interests />
      <Expectations />
    </div>
  );
}

export default App;
