import "./App.css";
import Contacts from "./componenets/Contacts";
import Edit from "./componenets/Contacts/Edit"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Contacts />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
