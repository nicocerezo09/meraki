import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Form from './components/Form/Form';
import { CartContextProvider } from './components/Context/CartContext';

// export const Context = createContext()


const App = () => {

  // const [cart, setCart] = useState([])
  // console.log(cart)

  return (
      <div className="App">
        {/* <Context.Provider value={{ cart, setCart }}> */}
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
          </Routes>
          </div>
          </BrowserRouter>
          </CartContextProvider>
        {/* </Context.Provider> */}
      </div>
  );
}

export default App;
