import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Form from './components/Form/Form';
import { CartContextProvider } from './Context/CartContext';
import { NotificationProvider } from './notification/Notification';
import Cart from './components/Cart/Cart';

const App = () => {


  return (
      <div className="App">
        {/* <Context.Provider value={{ cart, setCart }}> */}
        <NotificationProvider>
          <CartContextProvider>
            <BrowserRouter>
            <NavBar />
            <div className="container">
            {/* <Link to='/form' className='Option'>Form</Link> */}
            <Routes>
              <Route path='/list' element={<ItemListContainer />} />
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='*' element={<h1>Error 404</h1>} />
              <Route path='/form' element={<Form />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
            </div>
            </BrowserRouter>
            </CartContextProvider>
          </NotificationProvider>
        {/* </Context.Provider> */}
      </div>
  );
}

export default App;
