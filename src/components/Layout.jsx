import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "../components/css/layout.css";

export default function Layout() {
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <div className="layout-grid">
          <div className="layout-sidebar">
            <Sidebar />
          </div>

          <main className="layout-content">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
