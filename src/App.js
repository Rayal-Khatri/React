import './App.css';
import Header from "./MyComponents/Header";
import {TodoItems} from "./MyComponents/TodoItems";
import {Footer} from "./MyComponents/Footer";

function App() {
  return (
    <div className="Myclasses">
      <Header title="Hello world"/>
      <TodoItems/>
      <Footer/>
    </div>
  );
}

export default App;
