class TituloDinamico extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open" });
        
        //base do component
        const componentRoot = document.createElement("h1");
        componentRoot.textContent = this.getAttribute("titulo");

        //estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1{
                color: red;
            }
        `;

        //enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }

    // static get observedAttributes() {
    //     return ['titulo'];
    //   }
      
    //   // attribute change
    //   attributeChangedCallback(property, oldValue, newValue) {
    
    //     if (oldValue === newValue) return;
    //     this[ property ] = newValue;
        
    //   }
      
    //   // connect component
    //   connectedCallback() {
    //     this.textContent = `${ this.titulo }`;
    //   }
}

//definir o nome da tag e o seu modelo, todas as tags customisadas devem ter o "-" no nome
customElements.define("titulo-dinamico" , TituloDinamico);