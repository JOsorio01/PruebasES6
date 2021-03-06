import { PELICULAS } from '../../mock-peliculas.js';

class CustomButton extends HTMLElement {
  constructor() {
    super();//llamamos al constructor de HTMLElement
    //se agrega un ShadowDOM
    this.shadow = this.attachShadow( { mode: 'closed' } );
  }
  //Se construirá un bortón y un párrafo
  //Si el botón es presionado desaparece o aparece el texto del párrafo
  connectedCallback() {
    let pelis = new Object(PELICULAS);
    let estado = true;//maneja el estado de visible/no visible
    //creación de los elementos del componente
    let t = "";
    for (let p of pelis) {
       t += (`${p.year} - ${p.name}\n`);
    }

    const div = document.createElement('div');
    const customButton = document.createElement('button');
    const par = document.createElement('p');
    par.innerText = t;
    //agregar los elementos al DOM
    document.body.appendChild(div);
    div.appendChild(customButton);
    div.appendChild(par);

    par.setAttribute('id', 'par');
    customButton.innerText = "Desaparecer";
    //se agrega un Listener al botón con la funcion para aparecer y desaparecer
    customButton.addEventListener('click', function() {
      if (estado) {
        par.style.display = 'none';
        customButton.innerText = "Aparecer";
        estado = !estado;
      } else {
        par.style.display = 'block';
        customButton.innerText = "Desaparecer";
        estado = !estado;
      }
    });
  }
}
//agrega nuestro customElement al DOM
customElements.define('custom-button', CustomButton);

export default CustomButton;
