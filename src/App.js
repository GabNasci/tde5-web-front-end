// import './App.css';
// import Button from "./components/Button";
// import Contador from './components/Contador';
import ToDoList from "./components/ToDoList";


function App() {
  const ehOClicas = () => {
    alert("é o clicas")
  }

  return (
    <div>
        <ToDoList pageTitle="Lista de Lal's" ></ToDoList>

    </div>
  );
}

export default App;
