class CustomButton extends HTMLElement {
  constructor() {
    super();//llamamos al constructor de HTMLElement
    //se agrega un ShadowDOM
    this.shadow = this.attachShadow( { mode: 'closed' } );
  }
  //Se construirá un bortón y un párrafo
  //Si el botón es presionado desaparece o aparece el texto del párrafo
  connectedCallback() {
    let estado = true;//maneja el estado de visible/no visible
    //creación de los elementos del componente
    const customButton = document.createElement('button');
    const par = document.createElement('p');
    //agregar los elementos al DOM
    document.body.appendChild(customButton);
    document.body.appendChild(par);

    par.setAttribute("id", "p");//agrega el atributo id="p"
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
