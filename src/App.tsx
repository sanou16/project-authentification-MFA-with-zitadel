import React, { useEffect, useState } from "react";
import "./App.css";
import { createZitadelAuth, ZitadelConfig } from "@zitadel/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from './components/shared/Header';
import Login from "./components/Login";
import Callback from "./components/Callback";
import AdminProductDetail from "./components/admin/AdminProductDetail";
import AdminProductList from "./components/admin/AdminProductList";
import UserProductDetail from "./components/user/ProductDetail";
import UserProductList from "./components/user/ProductList";
import AdminProductForm from "./components/admin/AdminProductForm";
import Home from "./components/shared/Home";
import Footer from './components/shared/Footer';
import AdminProductFormEdit from './components/admin/AdminProductFormEdit'

import MyConfig from './myconfig';



function App() {
  /*
  const config: ZitadelConfig = {
    authority: "http://localhost:8080",
    client_id: "254786738604539907@project1",
  };
  */
  const zitadel = createZitadelAuth(MyConfig);

  function login() {
    zitadel.authorize();
  }

  function signout() {
    zitadel.signout();
  }

  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    zitadel.userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, [zitadel]);



  const ProtectedRoute = ({ element, path }: any) => {
    return authenticated ? (
      element
    ) : (
      <Navigate to="/" replace state={{ from: path }} />
    );
  };
  const AdminProtectedRoute = ({ element, path }: any) => {
    // Check if the user is authenticated and has admin privileges
    const isAdmin = /* Check if user has admin privileges */ true;

    return isAdmin ? (
      <ProtectedRoute element={element} path={path} />
    ) : (
      <Navigate to="/" replace state={{ from: path }} />
    );
  };

  return (

      <BrowserRouter>
        {/* <Header authenticated={authenticated} handleLogin={login} handleLogout={signout} /> */}
        <Header authenticated={authenticated} setAuth={setAuthenticated} userManager={zitadel.userManager} handleLogout={signout} />


          <Routes>
            {/* <Route
              path="/"
              element={
                <Login authenticated={authenticated} handleLogin={login} />
              }
            /> */}
            <Route path="/" element={<Home />} />


            <Route
              path="/callback"
              element={
                <Callback
                  authenticated={authenticated}
                  setAuth={setAuthenticated}
                  handleLogout={signout}
                  userManager={zitadel.userManager}
                />
              }
            />
                  {/* Routes pour les utilisateurs */}
      <Route path="/products" element={<UserProductList />} />
      <Route path="/products/:productId" element={<UserProductDetail />} />
      {/* Routes pour les administrateurs */}
      {/* <Route path="/admin/products" element={<AdminProductList />} /> */}
      <Route path="/admin/products" element={<AdminProtectedRoute element={<AdminProductList />} path="/admin/products" />} />

      <Route path="/admin/products/:productId" element={<AdminProtectedRoute element={<AdminProductFormEdit />} path="/admin/products/:productId" />} />
      <Route path="/admin/products/edit/:productId" element={<AdminProtectedRoute element={<AdminProductForm />} path="/admin/add-product" />} />
      <Route path="/admin/add-product" element={<AdminProtectedRoute element={<AdminProductForm />} path="/admin/add-product" />} />
      {/* <Route path="/admin/add-produict" element={<AdminProductForm />} /> */}

          </Routes>
                <Footer/>
        </BrowserRouter>

  );
}

export default App;