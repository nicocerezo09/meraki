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
        <h1>Hola nico</h1>
        <Counter />
        <Button callback={myFunction} label="Mi boton" />
        <ItemListContainer greeting={'Hola mundo!'}/>
      </div>
    </>
  );
}

export default App;
