import Header from "./components/header/Header"
import Input from "./components/inputs/Inputs"
import ListUsers from "./components/listUsers/ListUsers"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Store from "./components/store/Store"


function App() {
  return (
    <div className="container">
      <Provider store={Store}>
        <div className="App">
          <Header />
          <hr />
          <Input />
          <ListUsers />
        </div>
      </Provider>
    </div>
  );
}

export default App;
