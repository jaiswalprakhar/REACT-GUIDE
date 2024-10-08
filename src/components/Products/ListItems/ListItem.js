import { Fragment, useState } from "react";
import AddToCartIcon from "../../../assets/icons/add_cart.png";
import Modal from "../../UI/Modal";

const ListItem = ({ data, onAdd, onRemove /*, updateItemTitle*/ }) => {
  //const [counter, setCounter] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const increaseCounterByOne = event => {
    event.stopPropagation();
    onAdd(data.id)
    //setCounter(counter + 1);
  }

  const decreaseCounterByOne = event => {
    event.stopPropagation();
    onRemove(data.id);
    /*if(counter === 0){
        return;
    }

    if(counter === 1)
    {
      onRemove(data.id);
    }
    setCounter(counter - 1);*/
  }

  const handleModal = () => {
    setShowModal(previousState => !previousState)
  }

  return (
    <Fragment>
      <div onClick={handleModal} className={"item-card"}>
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
        data.quantity < 1 ?
      <button className={"cart-add"} onClick = {increaseCounterByOne}>
            <span>Add to Cart</span>
            <img src={AddToCartIcon} alt="Cart Icon" />
      </button>
      :
      <div className="cart-addon">
            <button onClick={decreaseCounterByOne}><span>-</span></button>
            <span>{data.quantity}</span>
            <button onClick={increaseCounterByOne}><span>+</span></button>
      </div>
      }
      </div>
      { 
        showModal && 
        <Modal onClose = {handleModal}>
          { /* List Item Content! */ /* Children of Modal as written between opening and closing modal component */ }
          <div className = "item-card__modal">
              <div className = "img-wrap">
                <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title} />
              </div>
              <div className = "meta">
                  <h3>{data.title}</h3>
                  <div className={"pricing"}>
                    <span>Rs {data.discountedPrice}</span>
                    <small>
                      <strike>Rs {data.price}</strike>
                    </small>
                  </div>
                  <p>{data.description}</p>
                  {
                    data.quantity < 1 ?
                    <button className={"cart-add card-add__modal"} onClick = {increaseCounterByOne}>
                          <span>Add to Cart</span>
                          <img src={AddToCartIcon} alt="Cart Icon" />
                    </button>
                    :
                    <div className="cart-addon card-addon__modal">
                          <button onClick={decreaseCounterByOne}><span>-</span></button>
                          <span>{data.quantity}</span>
                          <button onClick={increaseCounterByOne}><span>+</span></button>
                    </div>
                  }
              </div>
          </div>          
        </Modal>
      }
    </Fragment>
  );
};

export default ListItem;