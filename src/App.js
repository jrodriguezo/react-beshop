import {Route} from 'wouter'
import UserContext from './context/UserContex'
import Home from './pages/Home/index'
import Details from './pages/Details/index'
import Header from './components/Header/index'
import './App.css';

function App() {

  const userData = {
      count: 0
  }

  return (
    <UserContext.Provider value={userData}>
      <div className="App">
        <Header />
        <section className="App-content">
          <Route path="/" component={Home} />
          <Route path="/product/:id" component={Details} />
        </section>
      </div>
    </UserContext.Provider>
  );
}

export default App;
