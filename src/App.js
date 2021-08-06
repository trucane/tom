import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from './fed-src/components/landing/landing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Landing} />
      </Router>
    </div>
  );
}

export default App;
