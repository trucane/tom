import { BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './fed-src/components/landing/landing';
import UserProfile from './fed-src/components/Users/userProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/profile/:id" component={UserProfile} />
      </Router>
    </div>
  );
}

export default App;
