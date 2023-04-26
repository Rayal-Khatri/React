import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos=[
    {
      sno:1,
      title: "Get Cabbages",
      des:"Need 1 kilo of cabbage"
    },
    {
      sno:2,
      title: "Get A life",
      des:"15 mins exercise"
    },
    {
      sno:3,
      title: "Water",
      des:"Need to pull water to from the well"
    }
  ]
  return (
    <div className="Myclasses">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <Header  searchBar={false}/>
      <Todos todos={todos}/>
      <Footer/>
    </div>
  );
}

export default App;
