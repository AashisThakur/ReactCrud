import './App.css';
import Products from './Pages/Products';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';

function Home() {
  return <h1>Home Page</h1>
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<Home />} />
           <Route path='/products' element = {<Products />} />
           <Route path='/product' element = {<Product />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
