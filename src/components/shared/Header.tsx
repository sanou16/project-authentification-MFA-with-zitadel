// src/components/shared/Header.tsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { createZitadelAuth, ZitadelConfig } from "@zitadel/react";
import MyConfig from './../../myconfig'; // Importez votre configuration depuis le fichier config.tsx

type HeaderProps = {
  authenticated: boolean | null;
  setAuth: (authenticated: boolean | null) => void;
  userManager: any;
  handleLogout: any;
};

const Header: React.FC<HeaderProps> = ({
  authenticated,
  setAuth,
  userManager,
  handleLogout,
}: HeaderProps) => {
  const [userName, setUserName] = useState<string | null>(null);
  const navigate = useNavigate();
 /* const config: ZitadelConfig = {
    authority: "http://localhost:8080",
    client_id: "254786738604539907@project1",
  };
  */

  const zitadel = createZitadelAuth(MyConfig);

  function login() {
    zitadel.authorize();
  }

  const handleLogoutClick = () => {
    handleLogout();
    navigate("/");
  };

  useEffect(() => {
    zitadel.userManager.getUser().then((user) => {
      if (user && user.profile.name) {
        setUserName(user.profile.name);
      } else {
        setUserName(null);
      }
    });
  }, [zitadel]);

  return (
    <header className="container">
      <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ms-5">
        <Link className="navbar-brand" to="/">
          Mon Application
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Products">
                Liste des produits
              </Link>
            </li>
            {authenticated && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin/Products">
                  Gestion des Produits
                </Link>
              </li>
            )}
          </ul>
          <div className="form-inline my-2 my-lg-0 ms-auto">
            {authenticated ? (
              <>
                <span className="h5 my-2 me-2"><Link to="/Callback">{userName}</Link></span>
                <button
                  className="btn btn-outline-danger my-2 my-sm-0"
                  onClick={handleLogoutClick}
                >
                  Se déconnecter
                </button>
              </>
            ) : (
              <button
                className="btn btn-outline-primary my-2 my-sm-0"
                onClick={login}
              >
                Se connecter
              </button>
            )}
          </div>
        </div>

      </nav>
      </div>
    </header>
  );
};

export default Header;
