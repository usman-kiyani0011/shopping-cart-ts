import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Products } from "./components/products/Products";
import { CartLink } from "./components/cart/CartLink";
import { Cart } from "./components/cart/Cart";
import styles from "./App.module.css";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.header}>
          <nav>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
            <Link className={styles.navLink} to="/products">
              Products
            </Link>
            <CartLink />
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
