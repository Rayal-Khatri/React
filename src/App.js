import './App.css';
import Header from "./MyComponents/Header";
import {TodoItems} from "./MyComponents/TodoItems";
import {Footer} from "./MyComponents/Footer";

function App() {
  return (
    <div className="Myclasses">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <Header  searchBar={false}/>
      <TodoItems/>
      <Footer/>
    </div>
  );
}

export default App;
