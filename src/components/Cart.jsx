import book from "../components/img/book.png";
import headphone from "../components/img/headphone.png";
import watch from "../components/img/watch.png";
import coffee from "../components/img/coffee.png";
import rating from "../components/img/rating.png";
import laptop from "../components/img/laptop.png";
import shirt from "../components/img/shirt.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../redux/slice/slice";
import "../components/css/cart.css";

export default function Cart() {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const purchase = () => {
    alert("Order is successful!")
  }
  const imagesMap = {
    Book: book,
    Headphone: headphone,
    Watch: watch,
    Coffee: coffee,
    Laptop: laptop,
    Shirt: shirt,
  };
  return (
    <>
      <div className="cart-container">
        <button onClick={() => navigate("/")} className="button-back">
          Back to products list
        </button>
        <div className="products">
          {cart.map(
            ({ id, imageUrl, title, description, price, oldPrice, save }) => (
              <div className="product-card" key={id}>
                <img src={imagesMap[imageUrl]} alt="" />
                <div className="product-info">
                  <p style={{ color: "black" }}>{title}</p>
                  <p style={{ color: "black" }}>{description}</p>
                  <p style={{ color: "black" }}>
                    ${price} <span className="discount">${oldPrice}</span>
                  </p>
                  <p style={{ color: "#7B61FF" }}>You save ${save}</p>
                  <img src={rating} alt="" />
                  {/* <button onClick={() => dispatch(increment({ id }))}>+</button>
                  <button onClick={() => dispatch(decrement({ id }))}>-</button> */}
                  <div className="remove-button">
                    <button onClick={() => dispatch(removeProduct({ id }))}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
        {cart.length > 0 ? (
          <div className="purchase">
            <button onClick={purchase}>Make a purchase</button>
          </div>
        ) : (
            <div className="cart-empty">
              <h4 style={{ color: "black"}}>Your cart is empty!</h4>
            </div>
        )}
      </div>
    </>
  );
}
