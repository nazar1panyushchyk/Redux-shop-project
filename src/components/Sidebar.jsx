import avatar from "../components/img/avatar.png";
import "../components/css/main.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const activeNavLink = ({ isActive }) => {
    return isActive ? "nav-item active" : "nav-item";
  };
  const user = useSelector((state) => state.products.user);
  return (
    <>
      <div className="sidebar-container">
        <div className="slidebar-top">
          <div className="profile-section">
            <div className="profile-card">
              <img src={user.avatar} alt="" className="profile-img" />
              <div className="profile-info">
                <h4 style={{ color: "black" }}>{user.name} {user.surname}</h4>
                <p style={{ color: "black" }}>{user.job}</p>
              </div>
            </div>
          </div>

          <nav className="nav-menu">
            <NavLink to="/" className={activeNavLink}>
              <AiOutlineDashboard className="nav-icon" />
              <span>Dashboard</span>
            </NavLink>

            <NavLink to="/cart" className={activeNavLink}>
              <FiShoppingCart className="nav-icon" />
              <span>Order history</span>
            </NavLink>

            <NavLink to="/transactions" className={activeNavLink}>
              <FaClipboardList className="nav-icon" />
              <span>All transactions</span>
            </NavLink>

            <NavLink to="/saved" className={activeNavLink}>
              <FaHeartCirclePlus className="nav-icon" />
              <span>Saved items</span>
            </NavLink>

            <NavLink to="/profile" className={activeNavLink}>
              <FaUserPen className="nav-icon" />
              <span>Profile</span>
            </NavLink>

            <NavLink to="/logout" className={activeNavLink}>
              <IoMdLogOut className="nav-icon" />
              <span>Logout</span>
            </NavLink>
          </nav>
        </div>
        <div className="support-section">
          <BiSupport className="support-icon" />
          <span>Contact Support</span>
        </div>
      </div>
    </>
  );
}
