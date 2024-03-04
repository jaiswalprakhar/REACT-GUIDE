/*import logo from './logo.svg';
import './App.css';*/
//import React from "react";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

//import ListItem from "./components/Products/ListItems/ListItem";
import Products from "./components/Products/Products";
import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";

const App = () => {
  return(
    /*<div>
    <h1>Hello World!</h1>
    <ListItem></ListItem>
    </div>*/
    <div>
    <Header/>
    <Subheader/>
    <Products/>
    </div>
  );
  //creating React element without JSX
  //return React.createElement('div', {}, React.createElement('h1', {className : "dummyClass", id : "container"}, 'Hello World!'));
}

export default App;