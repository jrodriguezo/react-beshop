import {Route} from 'wouter'
import Home from './pages/Home/index'
import Details from './pages/Details/index'
import Header from './components/Header/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-content">
        <Route path="/" component={Home} />
        <Route path="/product/:id" component={Details} />
      </section>
    </div>
  );
}

export default App;
