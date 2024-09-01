import { useState, useEffect } from "react";
import ListItem from "./ListItems/ListItem";
import axios from "axios";
import Loader from "../UI/Loader";

/*{const items = [
  {
    id: 0,
    discountedPrice: 340,
    price: 450,
    title: "Title of the Item 1",
    thumbnail: "placeholder.jpg"
  },
  {
    id: 1,
    discountedPrice: 80,
    price: 100,
    title: "Title of the Item 2",
    thumbnail: "placeholder.jpg"
  },
];}*/

const Products = ({ onAddItem, onRemoveItem, eventState }) => {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  //const [presentItems, setPresentItems] = useState([]);

  /*const [items, setItems] = useState([
    {
      id: 0,
      discountedPrice: 340,
      price: 450,
      title: "Title of the Item 1",
      thumbnail: "placeholder.jpg",
    },
    {
      id: 1,
      discountedPrice: 80,
      price: 100,
      title: "Title of the Item 3",
      thumbnail: "placeholder.jpg",
    },
    {
      id: 2,
      discountedPrice: 80,
      price: 100,
      title: "Title of the Item 4",
      thumbnail: "placeholder.jpg",
    },
    {
      id: 3,
      discountedPrice: 80,
      price: 100,
      title: "Title of the Item 5",
      thumbnail: "placeholder.jpg",
    }
  ]);*/

  useEffect(() => {
    /*const result = fetch(`https://react-guide-2023-128e4-default-rtdb.firebaseio.com/items.json`);
    console.log(result);*/

    /*fetch(`https://react-guide-2023-128e4-default-rtdb.firebaseio.com/items.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })*/

    /*axios.get(`https://react-guide-2023-128e4-default-rtdb.firebaseio.com/items.json`)
    .then(response => {
      //console.log(response);
      const data = response.data;
      const transformedData = data.map((item, index) => {
        return {
          ...item,
          id: index
        }
      })
      //console.log(transformedData);
      setItems(transformedData);
    })
    .catch(error => {
      console.log(error);
    })*/

    //Using Async Await keyword -

    async function fetchItems() {
      try {
        const response = await axios.get(`https://react-guide-2023-128e4-default-rtdb.firebaseio.com/items.json`);
        const data = response.data;
        const transformedData = data.map((item, index) => {
          return {
            ...item,
            quantity: 0,
            id: index
          }
        })
        //setLoader(false);
        setItems(transformedData);
      } 
      catch (error) {
        //setLoader(false);
        console.log("Error: ", error);
        //alert("Some error occured");
        //alert(`Some error occured : ${error.response.data.error}`); // Found in the console
        alert(`Some error occured : ${error.message}`); // Found in the console
        //alert(error);
      }
      finally {
        setLoader(false);
      }
  }  

    fetchItems();
  }, [])

  useEffect(() => {
      if(eventState.id > -1)  {
        if(eventState.type === 1)  {
            handleAddItem(eventState.id);
          }
          else if(eventState.type === -1)  {
              handleRemoveItem(eventState.id);
            }
      }
  }, [eventState])

  const handleAddItem = id => {
    //console.log(id);
    /*if(presentItems.indexOf(id) > -1)
    {
      return;
    }
    setPresentItems([...presentItems, id]);
    onAddItem();
    console.log(presentItems);*/
    let data = [...items];
    let index = data.findIndex(i => i.id === id)
    data[index].quantity += 1;
    setItems([...data]);
    onAddItem(data[index]);
  }

  const handleRemoveItem = id => {
    //console.log(id);
    /*let index = presentItems.indexOf(id);
    if(index > -1)
    {
      let items = [...presentItems];
      items.splice(index, 1)
      setPresentItems([...items]);
      console.log(presentItems);
      onRemoveItem();
    }*/
    let data = [...items];
    let index = data.findIndex(i => i.id === id)
    if(data[index].quantity !== 0)
    {
      data[index].quantity -= 1;
      setItems([...data]);
      onRemoveItem(data[index]);
    }
  }

  // Updating the title of the item cart -
  /*const updateItemTitle = async (itemId) => {
    console.log(`Item with ID: ${itemId}`);
    try {
        let title = `Updated Title #Item-${itemId}`
        await axios.patch(`https://react-guide-2023-128e4-default-rtdb.firebaseio.com/items/${itemId}.json`, {
        title: title
    })
    let data = [...items];
    let index = data.findIndex(e => e.id === itemId);
    data[index]['title'] = title

    setItems(data)
  }
  catch {
      console.log("Error Updating the data!");
  }
  }*/

  return (
    <>
    <div className={"product-list"}>
      <div className={"product-list--wrapper"}>
            {/*<ListItem data = {items[0]}></ListItem>
            <ListItem data = {items[1]}></ListItem>*/}

        {/*[<div>Hello World!</div>,<p>Hii!</p>]*/}

        {
        items.map((item) => {
          //console.log(item);
          return (<ListItem onAdd={handleAddItem} onRemove={handleRemoveItem} key={item.id} data={item} /*updateItemTitle={updateItemTitle}*//>)
        })
        }
      </div>
    </div>
    { loader && <Loader/> }
    </>
  );
};

export default Products;