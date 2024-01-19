import React from "react";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import FavContextProvider from "./contexts/favContext";
import AuthContextProvider from "./contexts/AuthContext";
import CommentContext from "./contexts/CommentsContext";
const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <CommentContext>
          <FavContextProvider>
            <CartContextProvider>
              <ProductContextProvider>
                <Header />
                <Routing />
                <Footer />
              </ProductContextProvider>
            </CartContextProvider>
          </FavContextProvider>
        </CommentContext>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
