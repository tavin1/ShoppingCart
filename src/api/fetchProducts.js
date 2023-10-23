const fetchProdutcs = async (query) => {

  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`); /*aqui passo o que estou buscando(${})*/
  const data = await  response.json(); /* aqui a const data armazena o que vem do navegador*/

  return data.results; /**aqui eu apenas busco o ARRAY dos produtos, dentro da API, um filtro para a busca*/
};

export default fetchProdutcs;
