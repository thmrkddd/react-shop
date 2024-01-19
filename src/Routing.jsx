import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import EditProduct from "./components/EditProduct/EditProduct";
import Details from "./components/Details/Details";
import AddProduct from "./components/AddProduct/AddProduct";
import Cart from "./components/Cart/Cart";
import Payment from "./components/Payment/Payment";
import Fav from "./components/Fav/Fav";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import { ProtectedRoutes } from "./components/helpers/functions";

const PUBLIC_ROUTES = [
  { link: "/", element: <Main />, id: 1 },
  { link: "/about", element: <About />, id: 2 },
  { link: "/contacts", element: <Contacts />, id: 3 },
  { link: "/details/:id", element: <Details />, id: 4 },
  { link: "/cart", element: <Cart />, id: 5 },
  { link: "/payment", element: <Payment />, id: 6 },
  { link: "/favourite", element: <Fav />, id: 7 },
  { link: "/register", element: <Register />, id: 8 },
  { link: "/login", element: <Login />, id: 9 },
];
const ADMIN_ROUTES = [
  { link: "/edit/:id", element: <EditProduct />, id: 10 },
  { link: "/add", element: <AddProduct />, id: 11 },
];
const Routing = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        {ADMIN_ROUTES.map((elem) => (
          <Route path={elem.link} element={elem.element} key={elem.id} />
        ))}
      </Route>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default Routing;
