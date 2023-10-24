import React, {useContext} from 'react';
import {BsFillCartPlusFill} from 'react-icons/bs';
import propTypes from 'prop-types';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

function ProductCard({ data }) {
  const { title, thumbnail, price, permalink } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ...cartItems, data ]);


  return (
    <section className="product-card">
      
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card__title">{title}</h2>
        <a href={permalink} className="perma__link">{permalink}Link</a>
      </div>

      <button
        type="button"
        className="button__add-cart"
        onClick={ handleAddCart }
      >
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

/*aqui importamos o nosso ProductCard para dentro do nosso product, pois é aqui onde mostramos
os produtos buscados */

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
