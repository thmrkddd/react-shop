import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Routing from "./Routing";
import Footer from "./components/Footer/Footer";
import ProductContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import FavContextProvider from "./contexts/favContext";
import useAuth from "./contexts/AuthContext";
const App = () => {
  return (
    <>
      {/* <useAuth> */}
      <FavContextProvider>
        <CartContextProvider>
          <ProductContextProvider>
            <BrowserRouter>
              <Header />
              <Routing />
              <Footer />
            </BrowserRouter>
          </ProductContextProvider>
        </CartContextProvider>
      </FavContextProvider>
      {/* </useAuth> */}
    </>
  );
};

export default App;
