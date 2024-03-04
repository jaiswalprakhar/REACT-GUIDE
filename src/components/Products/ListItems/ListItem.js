import { Fragment, useState } from "react";
import AddToCartIcon from "../../../assets/icons/add_cart.png";
//import Modal from "../../UI/Modal";

const ListItem = ({ data /*, updateItemTitle*/ }) => {
  const[counter, setCounter] = useState(0)

  const increaseCounterByOne = () => {
    setCounter(counter + 1);
  }

  const decreaseCounterByOne = () => {
    if(counter === 0){
        return;
    }
    setCounter(counter - 1);
  }

  return (
    <Fragment>
      <div className={"item-card"}>
      <img
        className={"img-fluid"}
        src={`/assets/${data.thumbnail}`}
        /*OR*/ /*{"/assets/" + data.thumbnail}*/ /*OR*/ /*"/assets/placeholder.jpg"*/ alt={
          data.title
        }
      />
      <div className={"item-card__information"}>
        <div className={"pricing"}>
          <span>Rs {data.discountedPrice}</span>
          <small>
            <strike>Rs {data.price}</strike>
          </small>
        </div>
        <div className={"title"}>
          <h3>{data.title}</h3>
        </div>
      </div>
      {/*<button onClick={ () => updateItemTitle(data.id)}>Update the title</button>*/}
      {
        counter < 1 ?
      <button className={"cart-add"} onClick = {increaseCounterByOne}>
            <span>Add to Cart</span>
            <img src={AddToCartIcon} alt="Cart Icon" />
      </button>
      :
      <div className="cart-addon">
            <button onClick={decreaseCounterByOne}><span>-</span></button>
            <span>{counter}</span>
            <button onClick={increaseCounterByOne}><span>+</span></button>
      </div>
      }
      </div>
      <Modal/>
    </Fragment>
  );
};

export default ListItem;