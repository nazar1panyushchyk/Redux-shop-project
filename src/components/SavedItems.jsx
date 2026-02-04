import book from "../components/img/book.png";
import headphone from "../components/img/headphone.png";
import watch from "../components/img/watch.png";
import coffee from "../components/img/coffee.png";
import rating from "../components/img/rating.png";
import laptop from "../components/img/laptop.png";
import shirt from "../components/img/shirt.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { toggleFavorite } from "../redux/slice/slice";
import "./css/savedItems.css";

export default function SavedItems() {
  const favorites = useSelector((state) => state.products.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          {favorites.map((item) => {
            const isFavorite = favorites.find((fav) => fav.id === item.id);
            return (
              <div className="product-card" key={item.id}>
                <img src={imagesMap[item.imageUrl]} alt="" />
                <div className="product-info">
                  <p style={{ color: "black" }}>{item.title}</p>
                  <p style={{ color: "black" }}>{item.description}</p>
                  <p style={{ color: "black" }}>
                    ${item.price}{" "}
                    <span className="discount">${item.oldPrice}</span>
                  </p>
                  <p style={{ color: "#7B61FF" }}>You save ${item.save}</p>
                  <img src={rating} alt="" />
                  <div className="to-fav-container">
                    <div
                      className="fav-icon"
                      onClick={() => dispatch(toggleFavorite(item))}
                      style={{ cursor: "pointer" }}
                    >
                      {isFavorite ? (
                        <FaHeart size={24} color="#7B61FF" />
                      ) : (
                        <FaRegHeart size={24} color="gray" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {favorites.length === 0 && (
            <div className="fav-empty">
              <h4 style={{ color: "black" }}>Your favorite list is empty!</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
