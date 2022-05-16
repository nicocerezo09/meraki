import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Form from './components/Form/Form';
import { CartContextProvider } from './Context/CartContext';
import { NotificationProvider } from './notification/Notification';
import Cart from './components/Cart/Cart';
import Login from './components/LogIn/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';



const App = () => {

  return (
      <div className="App">
        <NotificationProvider>
          <CartContextProvider>
            <BrowserRouter>
            <NavBar />
            <Carousel/>
            <div className="container">
            <Routes>
              <Route path='/Login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/list' element={<ItemListContainer />} />
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='*' element={<h1>Error 404</h1>} />
              <Route path='/Form' element={<Form />}/>
              <Route path='/Cart' element={<Cart />} />
            </Routes>
            </div>
            <Footer/>
            </BrowserRouter>
            </CartContextProvider>
          </NotificationProvider>
      </div>
  );
}

export default App;
