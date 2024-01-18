import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import FavContextProvider from "./contexts/favContext";
import AuthContextProvider from "./contexts/AuthContext";
const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <FavContextProvider>
          <CartContextProvider>
            <ProductContextProvider>
              <Header />
              <Routing />
              <Footer />
            </ProductContextProvider>
          </CartContextProvider>
        </FavContextProvider>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
