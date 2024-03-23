// src/components/shared/Header.tsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { createZitadelAuth, ZitadelConfig } from '@zitadel/react';

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
  const config: ZitadelConfig = {
    authority: "http://localhost:8080",
    client_id: "255102769311055875@projet1",
  };
  const zitadel = createZitadelAuth(config);

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
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ms-5">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Products">
              Liste des Étudiants
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/Products">
              Gestion des Étudiants
            </Link>
          </li>
        </ul>
        <div className="form-inline my-2 ms-5 my-lg-0">
          {authenticated ? (
            <>
              <span className="mr-2">{userName}</span>
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
      </nav>
    </header>
  );
};

export default Header;
