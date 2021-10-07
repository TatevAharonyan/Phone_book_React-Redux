
import PhoneForm from "./todo/PhoneForm";
import PhoneList from "./todo/PhoneList";
import Header from "./todo/Header";
import "./App.css";


function App() {



  return (

    <div className="App" >
      <div id="container" >
        <Header />
        <PhoneList />
        <PhoneForm />
      </div>
    </div>
  )

}

export default App;
