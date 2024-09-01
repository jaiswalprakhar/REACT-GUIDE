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
import { useState } from "react";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [eventQueue, setEventQueue] = useState({
    id: "",
    type: ""
  })

  const handleAddItem = item => {
    //setCartItems(cartItems + 1);
    let items = [...cartItems];
    let index = items.findIndex(i => i.id === item.id);
    if(index > -1)
    {
      items[index] = item;
    }
    else
    {
      items.push(item);
    }
    setCartItems([...items]);
  }

  const handleRemoveItem = item => {
    //setCartItems(cartItems - 1);
    let items = [...cartItems];
    let index = items.findIndex(i => i.id === item.id);
    if(items[index].quantity === 0)
    {
      items.splice(index, 1);
    }
    else
    {
      items[index] = item;
    }
    setCartItems([...items]);
  }

  const handleEventQueue = (id, type) => {
    //console.log({ id, type })
    setEventQueue({
      id,
      type
    });
  }

  return(
    /*<div>
    <h1>Hello World!</h1>
    <ListItem></ListItem>
    </div>*/
    <div>
    <Header count={cartItems.length} items={cartItems} onHandleEvent={handleEventQueue}/>
    <Subheader/>
    <Products onAddItem = {handleAddItem} onRemoveItem = {handleRemoveItem} eventState={eventQueue}/>
    </div>
  );
  //creating React element without JSX
  //return React.createElement('div', {}, React.createElement('h1', {className : "dummyClass", id : "container"}, 'Hello World!'));
}

export default App;