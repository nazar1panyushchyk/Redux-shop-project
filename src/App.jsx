import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import SavedItems from "./components/SavedItems";
import Profile from "./components/Profile";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="cart" element={<Cart />} />
            <Route path="saved" element={<SavedItems />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
