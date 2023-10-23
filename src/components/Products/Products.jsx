import React, {useEffect, useContext} from 'react';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import AppContext from '../../context/AppContext';
import './Products.css';


function Products() {

  const {products, setProducts} = useContext (AppContext);

  useEffect(() => {
    
    fetchProducts('iphone').then((response) => {
      setProducts(response);
    });
  }, []);
  /*dentro de um use effects eu posso passar dois parametros, sendo uma a Call BACK através de uma 
    arrow function e ou sendo um ARRAY de dependencias.
    Se eu passar algum parametro para o ARRAY, sempre a função executar novamente ela mudara
    o parametro passado. Caso eu deixe ela vazia, apenas mudará uma vez.
    Nesse caso deixarei ela vazia, pois quero que ela me mostre apenas uma vez os produtos procurados */
  
  return (
    <section className="products container">
      {products.map((product) => <ProductCard key={product.id} data={product} />)}
    </section>
  );  
}

export default Products;
