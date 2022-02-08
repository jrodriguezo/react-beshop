import {Route} from 'wouter'
import CartContext from './context/CartContex'
import Home from './pages/Home/index'
import Details from './pages/Details/index'
import Header from './components/Header/index'
import './App.css';

function App() {

  const cartData = {
      count: 0
  }

  return (
    <CartContext.Provider value={cartData}>
      <div className="App">
        <Header />
        <section className="App-content">
          <Route path="/" component={Home} />
          <Route path="/product/:id" component={Details} />
        </section>
      </div>
    </CartContext.Provider>
  );
}

export default App;
