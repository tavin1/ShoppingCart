import React, {useState, useContext} from 'react';
import {BiSearchAlt2} from 'react-icons/bi';
import fetchProducts from '../../api/fetchProducts';
import AppContext from '../../context/AppContext';
import './SearchBar.css';


function SearchBar() {

  const  {setProducts, setLoading} = useContext(AppContext);
  const  [searchValue, setSearchValue] = useState('');


  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      {name}
      <input 
        type="search" 
        value={searchValue}
        placeholder="Buscar produtos"
        className="search_input"
        onChange={ ({ target }) => setSearchValue(target.value) } /*Aqui realizo a mudança do valor (target), pegando o que é digitado (search) e modificando as variaveis*/
        required
      />
      <button type="submit" className="search_button"><BiSearchAlt2 /></button>
    </form>
  );
}

export default SearchBar;
