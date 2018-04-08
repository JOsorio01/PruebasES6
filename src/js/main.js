import CustomButton from './components/button-component/button.component.js';
import { PELICULAS } from './mock-peliculas.js';

let pelis = new Object(PELICULAS);

console.log(pelis);
let p = document.getElementById('p');
p.innerText = pelis[0].name + "\n" + pelis[1].name;
