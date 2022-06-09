import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Contract from './components/Contract/Contract';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Product></Product>
      <Contract></Contract>
      <Footer></Footer>
    </div>
  );
}

export default App;
