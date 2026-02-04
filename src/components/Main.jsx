import book from "../components/img/book.png";
import headphone from "../components/img/headphone.png";
import watch from "../components/img/watch.png";
import coffee from "../components/img/coffee.png";
import rating from "../components/img/rating.png";
import laptop from "../components/img/laptop.png";
import shirt from "../components/img/shirt.png";
import "../components/css/main.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../redux/operation/operations";
import { addToCart, toggleFavorite } from "../redux/slice/slice";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

export default function Main() {
  const { items } = useSelector((state) => state.products);
  const { favorites } = useSelector((state) => state.products);
  const { filter } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  const filteredProducts = items.filter((item) =>
    item.title.toLowerCase().includes(filter.toLowerCase()),
  );
  const popularProducts = filteredProducts.slice(0, 4);
  const recommendedProducts = filteredProducts.slice(4, 6);
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
      <div className="products-container">
        {filteredProducts.length === 0 ? (
          <div className="not-found">
            <h4 style={{ color: "black", fontSize: "17px" }}>Not found! Try again.</h4>
          </div>
        ) : (
          <>
            <h3 style={{ color: "black", fontSize: "18px" }}>
              Popular products
            </h3>
            <div className="products">
              {popularProducts.map((item) => {
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
                      <div className="to-cart-container">
                        <button
                          className="to-cart"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          <NavLink to="/cart" style={{ color: "white" }}>
                            To cart
                          </NavLink>
                        </button>
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
            </div>

            <div className="recommended-container">
              <h3
                className="section-title recommended-title"
                style={{ color: "black" }}
              >
                Recommended products
              </h3>
              <div className="recommended">
                <div className="products recommended-grid">
                  {recommendedProducts.map((item) => {
                    const isFavorite = favorites.find(
                      (fav) => fav.id === item.id,
                    );
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
                          <p style={{ color: "#7B61FF" }}>
                            You save ${item.save}
                          </p>
                          <img src={rating} alt="" />
                          <div className="to-cart-container">
                            <button
                              className="to-cart"
                              onClick={() => dispatch(addToCart(item))}
                            >
                              <NavLink to="/cart" style={{ color: "white" }}>
                                To cart
                              </NavLink>
                            </button>
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
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
