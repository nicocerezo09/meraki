import './App.css';
import Counter from './components/Counter/Counter';
import NavBar from './components/NavBar/NavBar';
import Button from './components/Button/Button';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  const myFunction = () => {
    console.log('hice click en el boton')
  }

  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Bienvenidos'}/>
        <Counter />
        <Button callback={myFunction} label="Agregar al carrito" />
      </div>
    </>
  );
}

export default App;
