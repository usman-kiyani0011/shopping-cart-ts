import React from "react";
import store from "../../assets/images/store.jpg";
const Home = () => {
  return (
    <main className="page">
      <h1>Welcome to the Store</h1>
      <figure>
        <img
          src={store}
          alt="A large old storefront"
          width="800"
        />
        <figcaption>Gary Houston, CC0, via Wikimedia Commons</figcaption>
      </figure>
    </main>
  );
};

export default Home;
