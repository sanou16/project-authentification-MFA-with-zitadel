import React from "react";
// import { FcUp } from "react-icons/fc";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer py-3 mt-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col ">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Gestion de Produit. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
