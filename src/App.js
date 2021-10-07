
import PhoneForm from "./phone/PhoneForm";
import PhoneList from "./phone/PhoneList";
import Header from "./phone/Header";
import "./App.css";


function App() {



  return (

    <div className="App" >
      <div id="container" >
      <PhoneForm />
        <Header />
        <PhoneList />
    
      </div>
    </div>
  )

}

export default App;
