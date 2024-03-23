import React from 'react';
import './About.css';

function About() {
  return (
    
      <div className="About">
        <div className="container">
          <h1 className="text-center my-4">Ma Boutique en Ligne</h1>
       <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product-card">
                <img src="/images/eco-friendly-cleaning-products-set-basket-with-soaps-brushes.jpg" alt="Produit 1" />
                <h3 className="product-title">Produit de toilettes</h3>
                <p className="product-description">des produits pour la toilette</p>
                <a href="https://api.whatsapp.com/send?phone=00221774718835" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
  Contacter sur WhatsApp
</a>

              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product-card">
                <img src="/images/collection-common-food-allergens-people.jpg" alt="Produit 2" />
                <h3 className="product-title">Produit alimentaire</h3>
                <p className="product-description">sucrerie, légumes, fruits</p>
                <a href="https://api.whatsapp.com/send?phone=00221774718835" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
  Contacter sur WhatsApp
</a>

              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="product-card">
                <img src="/images/eco-friendly-cleaning-products-set-basket-with-soaps-brushes.jpg" alt="Produit 3" />
                <h3 className="product-title">Produit ménagers</h3>
                <p className="product-description">Pour le ménage</p>
                <a href="https://api.whatsapp.com/send?phone=00221774718835" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
  Contacter sur WhatsApp
</a>

              </div>
            </div>
            
            {/* Ajoutez plus de colonnes ici pour plus de produits */}
          </div>
        </div>
      </div>
    );
}

export default About;
