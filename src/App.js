import './App.css';
import Header from "./MyComponents/Header";
import {TodoItems} from "./MyComponents/TodoItems";
import {Footer} from "./MyComponents/Footer";

function App() {
  return (
    <div className="Myclasses">
      <Header/>
      <TodoItems/>
      <Footer/>
    </div>
  );
}

export default App;
