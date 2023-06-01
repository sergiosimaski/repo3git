import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CartScreen } from './componentes/CartScreen/CartScreen'
import { NavBar } from "./componentes/NavBar/NavBar";
import { ItemCount } from './componentes/ItemCount/ItemCount';
//import { Pika } from './components/Pika/Pika';
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from 'react-router-dom'
import { CartProvider } from './componentes/context/CartContext'
import { Checkout } from './componentes/Checkout/Checkout';
// import { UiProvider } from './components/context/UiContext';
// 

function App() {
  return (
    
      <CartProvider >
        <div className='App'>
          <Router>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/productos/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
              <Route path='/counter' element={<ItemCount />} />
              <Route path='/checkout' element={<Checkout/>} />
              <Route path='/cart' element={<CartScreen />} />
              {/* <Route path='/pika' element={<Pika />} /> */}
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </Router>
        </div>
      </CartProvider>
   
  );
}

export default App;