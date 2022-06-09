import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Product></Product>
    </div>
  );
}

export default App;
