import logo from "../components/img/logo.png";
import avatar from "../components/img/avatar.png";
import polygon from "../components/img/polygon.png";
import bell from "../components/img/bell.png";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateFilter } from "../redux/slice/slice";
import "../components/css/header.css";

export default function Header() {
  const user = useSelector((state) => state.products.user);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(updateFilter(search));
  }
  return (
    <>
      <header>
        <div className="header">
          <a href="">
            <img src={logo} className="logo" alt="" />
          </a>
          <nav className="nav-header">
            <a href="#" style={{ color: "black" }}>
              Products
            </a>
            <a href="#" style={{ color: "black" }}>
              Services
            </a>
            <a href="#" style={{ color: "black" }}>
              Blog
            </a>
          </nav>
          <form className="search-form" onSubmit={handleSearch}>
            <button type="submit">
              <IoSearch color="#DD7230" size="24px" />
            </button>
            <div>
              <input
                type="text"
                className="search"
                placeholder="Search something..."
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>
          <div className="user">
            <img src={user.avatar} className="avatar" alt="" />
            <p style={{ color: "black" }}>{user.name}</p>
            <img src={polygon} className="user-more" alt="" />
          </div>
          <div>
            <img src={bell} className="bell" alt="" />
          </div>
        </div>
      </header>
    </>
  );
}
