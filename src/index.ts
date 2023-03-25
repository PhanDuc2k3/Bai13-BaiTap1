import axios from 'axios';

interface Pokemon {
  name: string;
  url: string;
}

async function getPokemons(): Promise<Pokemon[]> {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
  return response.data.results as Pokemon[];
}

getPokemons().then((pokemons) => {
  console.log(pokemons);
}).catch((error) => {
  console.error(error);
});